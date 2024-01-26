import { View } from 'app/design/view'
import MaxWidthWrapper from './MaxWidthWrapper'
import { H5, Text } from 'app/design/typography'
import { Pressable } from 'app/design/touchableOpacity'
import { useProducts } from 'app/hooks/useData'
import { Product, ProductProps } from 'app/types/products'
import { ProductListing } from './ProductListing'
import { ScrollView } from 'app/design/scrollView'
import { cn } from 'app/lib/utils'
import { ProductsSliderSkeleton } from './Skeletons'
import { useEffect, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { useRouter } from 'solito/router'

interface ProductGridProps {
  supportedDeviceTypes: SupportedDeviceType[] | null

  productGridProps: {
    title: string | null
    slug?: string
    type_key?: string
    type_value?: string
  }
}

export const ProductGrid = ({
  supportedDeviceTypes,
  productGridProps,
}: ProductGridProps) => {
  const getSlugFromTypeKey = () => {
    switch (type_key) {
      case 'collection':
        return 'collections'
      case 'category':
        return 'categories'
      case 'brand':
        return 'brands'
    }
  }

  const { title, slug, type_key, type_value } = productGridProps

  const [loading, setLoading] = useState(true)

  const { data, refetch } = useProducts(
    getSlugFromTypeKey() as string,
    slug as string,
    'ae-en',
  )

  const getProductsData = useDebouncedCallback(async () => {
    await refetch()
    setLoading(false)
  })

  useEffect(() => {
    getProductsData()
  }, [])

  const products = data?.data.products

  let map: (Product | null)[] = []
  if (products && products.length) {
    map = products
  }

  const generatePath = () => {
    switch (type_key) {
      case 'page':
        return `/${slug}`
      case 'category':
        return `/products?categories=${slug}`
      case 'collection':
        return `/products?collections=${slug}`
      case 'brand':
        return `/products?brands=${slug}`
      case 'link':
        return type_value ?? '#'
      case 'product':
        return `/product/${slug}`
      case 'clinic-appointment-screen':
        return '/medical-centre'
      default:
        return '#'
    }
  }

  const getResponsiveStyleOptions = () => {
    if (supportedDeviceTypes === null || supportedDeviceTypes.length === 2) {
      return 'flex-col flex-1'
    } else if (supportedDeviceTypes.includes('mobile')) {
      return 'sm:flex-col sm:flex-1 block'
    } else if (supportedDeviceTypes.includes('desktop')) {
      return ' block'
    }
  }

  const { push } = useRouter()

  return (
    <View className={cn(getResponsiveStyleOptions(), 'px-2 pb-1')}>
      {title ? (
        <View className="flex-row items-center justify-between mb-2">
          <H5>{title}</H5>
          <Pressable
            onPress={() => push(generatePath())}
            className=" bg-blue-500  rounded-xl py-1.5 px-3"
          >
            <Text className="text-xs  text-white font-medium">View All</Text>
          </Pressable>
        </View>
      ) : null}
      <ScrollView horizontal className="overflow-visible h-60">
        {loading && !products
          ? Array(6).fill(<ProductsSliderSkeleton />)
          : map.map((product, i) => (
              <View
                className="w-36 h-60 mr-3 border border-muted p-1 rounded-lg "
                key={`product-${product?._id}`}
              >
                <ProductListing product={product} index={i} />
              </View>
            ))}
      </ScrollView>
    </View>
  )
}
