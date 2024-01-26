import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query'
import { BreadcrumbsProps } from 'app/components/BreadCrumb'
import { View } from 'app/design/view'
import { Category } from 'app/types/categories'
import { Product } from 'app/types/products'
import { DEFAULT_IMAGE } from 'app/config'
import { ScrollView } from 'app/design/scrollView'
import { useState } from 'react'
import { ProductListing } from 'app/components/ProductListing'
import MaxWidthWrapper from 'app/components/MaxWidthWrapper'
import { useSafeArea } from 'app/provider/safe-area/use-safe-area'

interface ProductListingPageProps {
  pageType: 'brand' | 'products' | 'category'
  pageName: string | string[]
  data: ProductListingPageData
  queryProps: {
    query: string
    setQuery: () => {
      setCollections: (value: string | undefined) => void
      setCategories: (value: string | undefined) => void
      setBrands: (value: string | undefined) => void
    }
  }
  refetch: (
    options?: RefetchOptions | undefined,
  ) => Promise<QueryObserverResult<any, Error>>
}

interface ProductListingPageData {
  heading?: string
  description?: string | null
  imageBannerUrl?: string | null
  breadCrumbs?: BreadcrumbsProps
  products?: Product[] | undefined
  categories?: Category[] | undefined
}

export function ProductsListingScreen({
  pageType,
  pageName,
  data,
  queryProps: { query, setQuery },
  refetch,
}: ProductListingPageProps) {
  const [isLoading, setLoading] = useState(false)

  const {
    imageBannerUrl = DEFAULT_IMAGE,
    heading = 'Products',
    breadCrumbs,
    description,
    products,
    categories,
  } = data

  const safeareaInsets = useSafeArea()
  return (
    <View className="flex-col flex-1 bg-white ">
      <View className="flex-col flex-1  px-2 mb-10" style={safeareaInsets}>
          <ScrollView horizontal={false} className="flex-1 bg-white flex-col">
            <View className="flex-row flex-1 flex-wrap justify-between">
              {products &&
                products.map((product, i) => (
                  <View className="w-[49%] border border-muted rounded-lg mb-2 p-1 flex-row items-center justify-center" key={`product-${product?._id}`}>
                    <ProductListing product={product} index={i} />
                  </View>
                ))}
            </View>
          </ScrollView>
      </View>
    </View>
  )
}
