import { Product } from 'app/types/products'
import { useState, useEffect } from 'react'
import { ProductsSliderSkeleton } from 'app/components/Skeletons'
import { View } from 'app/design/view'
import { Link } from 'solito/link'
import { cn, formatPrice, getPriceDataByLocale } from 'app/lib/utils'
import { SolitoImage } from 'solito/image'
import { Text } from 'app/design/typography'
import { ScrollView } from 'app/design/scrollView'
import { Pressable } from 'app/design/touchableOpacity'
import { AddtoCartButton } from './AddtoCartBtn'

interface ProductListingProps {
  product: Product | null
  index: number
}

export const ProductListing = ({ product, index }: ProductListingProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, index * 75)

    return () => clearTimeout(timer)
  }, [index])

  if (!product || !isVisible) return <ProductsSliderSkeleton />

  const priceData = getPriceDataByLocale('ae-en', product.prices)

  if (isVisible && product) {
    return (
      <View className="w-full flex-col">
        <Link
          className={cn(
            'invisible  w-full cursor-pointer group/main flex-row items-center  ',
            {
              'visible animate-in fade-in-5': isVisible,
            },
          )}
          href={`/product/${product.slug}`}
        >
          <View className="aspect-square relative border border-muted  rounded-lg ">
            <SolitoImage
              loading="eager"
              src={product.images.featured_image}
              fill
              alt={product.slug}
            />
            <AddtoCartButton id={product.id} />
          </View>
        </Link>
        <Text numberOfLines={2} className="mt-2 text-xs font-medium">
          {product.title}
        </Text>
        <View className="flex-row  items-center mt-1  space-x-2">
          <Text numberOfLines={1} className="text-red-500 font-medium text-xs">
            {formatPrice(priceData?.price.offer_price || '')}
          </Text>
          <Text
            numberOfLines={1}
            className="text-secondary  text-[10px] line-through"
          >
            {formatPrice(priceData?.price.regular_price || '')}
          </Text>
        </View>
        <ScrollView horizontal className=" mt-1.5 ">
          {product.categories?.map((cat) => (
            <Pressable
              className="bg-muted p-1 mr-1 px-1.5 h-6 rounded-lg items-center"
              key={cat._id}
            >
              <Text className="text-[11px] font-medium ">
                {cat.name}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    )
  }
}
