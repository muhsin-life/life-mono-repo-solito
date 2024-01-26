import createCart from 'app/helpers/createCart'
import { useStore } from './useStore'
import updateCartData from 'app/helpers/updateCart'

export const useCartActions = () => {
  const { store, updateCart } = useStore()

  const createCartReq = (payload: PayloadProps) => {
    createCart(payload).then((res) => {
      if (res.success) {
        updateCart(res.data)
      } else {
        console.log('failed to create cart')
      }
    })
  }

  const updateCartReq = (payload: PayloadProps) => {
    const cartId = store.cart.cart?.cart_data.cart_id as number
    updateCartData(payload, cartId).then((res) => {
      if (res.success) {
        updateCart(res.data)
      } else {
        console.log('failed to update cart')
      }
    })
  }

  const updateCartItems = (payload: PayloadProps, isFirstCartItem: boolean) => {
    if (isFirstCartItem) {
      createCartReq(payload)
    } else {
      updateCartReq(payload)
    }
  }

  return {
    updateCartItems,
  }
}
