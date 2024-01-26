import { Pressable } from 'app/design/touchableOpacity'
import { Icons } from './Icons'
import { Text } from 'app/design/typography'
import { useCartActions } from 'app/hooks/useCartActions'
import { getPayLoadData } from 'app/lib/utils'
import { useStore } from 'app/hooks/useStore'
import { useState } from 'react'

interface AddtoCartButtonProps {
  id: string
}

export const AddtoCartButton = ({ id }: AddtoCartButtonProps) => {
  const { store } = useStore()

  const cartItems = store.cart.cart?.cart_data.items ?? []
  const isFirstCartItem = cartItems.length === 0
  const getItemQty = () => {
    const foundCartItem = store.cart.cart?.cart_data.items.find((cartItem) => {
      return cartItem.items.some((item) => {
        return item.id === id
      })
    })

    if (foundCartItem) {
      const foundItem = foundCartItem.items.find((item) => item.id === id)
      return foundItem?.qty ?? 0
    }
    return 0
  }

  const [proQty, setProQty] = useState(getItemQty())

  const { updateCartItems } = useCartActions()

  const addProductToCart = () => {
    setProQty((prevQty) => prevQty + 1)
    updateCartItems(
      getPayLoadData(id, proQty + 1, cartItems?.length),
      isFirstCartItem,
    )
  }

  return (
    <Pressable
      onPress={() => addProductToCart()}
      className="h-6 px-2 rounded flex-row items-center bg-primary absolute right-1 bottom-1 space-x-1.5"
    >
      <Icons.addToCartIcon color={'white'} width={14} height={14} />
      <Text className="text-[10px] text-white font-semibold">
        {proQty > 0 ? proQty : 'ADD'}
      </Text>
    </Pressable>
  )
}
