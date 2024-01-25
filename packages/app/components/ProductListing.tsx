import { Product } from 'app/types/products'
import { useState, useEffect } from 'react'
import { ProductsSliderSkeleton } from 'app/components/Skeletons'
import { View } from 'app/design/view'
import { Link } from 'solito/link'
import { cn, formatPrice, getPriceDataByLocale } from 'app/lib/utils'
import { SolitoImage } from 'solito/image'
import { Text } from 'app/design/typography'
import { ScrollView } from 'app/design/scrollView'

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

  // !product ||
  if (!isVisible) return <ProductsSliderSkeleton />

  // const priceData = getPriceDataByLocale('ae-en', product.prices)

  if (isVisible && product) {
    return (
      <View className="w-36 h-60 mr-3">
        <Link
          className={cn(
            'invisible  w-full cursor-pointer group/main flex-row items-center',
            {
              'visible animate-in fade-in-5': isVisible,
            },
          )}
          href={`/product/${product.slug}`}
        >
          <View className="aspect-square relative">
            <SolitoImage
              loading="eager"
              src={product.images.featured_image}
              fill
              alt={product.slug}
            />
          </View>
        </Link>
        <Text className="mt-3">{product.title}</Text>
        {/* <View className="flex-col items-center mt-1 line-clamp-1 space-x-3">
          <Text className="text-red-500 font-medium text-sm">
            {formatPrice(priceData?.price.offer_price || '')}
          </Text>
          <Text className="text-secondary  text-xs line-through">
            {formatPrice(priceData?.price.regular_price || '')}
          </Text>
        </View> */}

        {product.categories?.map((cat) => (
          <Link
            href={`/product/${cat.slug}`}
            className="bg-muted h-3 p-1 mr-1"
            key={cat._id}
          >
            <Text className="text-sm">{cat.name}</Text>
          </Link>
        ))}
      </View>
    )
  }
}
