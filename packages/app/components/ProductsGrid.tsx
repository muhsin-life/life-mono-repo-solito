import { View } from 'app/design/view'
import MaxWidthWrapper from './MaxWidthWrapper'
import { H5, Text } from 'app/design/typography'
import { Pressable } from 'app/design/touchableOpacity'
import { useProducts } from 'app/hooks/useData'
import { Product } from 'app/types/products'
import { ProductListing } from './ProductListing'
import { ScrollView } from 'app/design/scrollView'
import { cn } from 'app/lib/utils'
import { ProductsSliderSkeleton } from './Skeletons'

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

  //   const { data, isLoading } = useProducts(
  //     getSlugFromTypeKey() as string,
  //     slug as string,
  //     'ae-en',
  //   )

  //   const products = data?.data.products

  //   let map: (Product | null)[] = []
  //   if (products && products.length) {
  //     map = products
  //   }

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
      return 'flex'
    } else if (supportedDeviceTypes.includes('mobile')) {
      return 'sm:flex block'
    } else if (supportedDeviceTypes.includes('desktop')) {
      return ' block'
    }
  }

  return (
    <View className={cn(getResponsiveStyleOptions(), 'px-2')}>
      <View className="flex-row items-center justify-between ">
        <H5>Special Deals</H5>
        <Pressable className=" border-blue-500 border rounded-2xl py-1.5 px-3">
          <Text className="text-xs font-medium text-blue-600 ">View All</Text>
        </Pressable>
      </View>

      <ScrollView horizontal className="overflow-visible">
        {Array(6).fill(<ProductsSliderSkeleton />)}
      </ScrollView>
      {/* <View className="flex-row flex-1">
        {map.map((product, i) => (
          <ProductListing key={`product-${i}`} product={product} index={i} />
        ))}
      </View> */}
    </View>
  )
}
