import { H1 } from 'app/design/typography'
import { View } from 'app/design/view'
import { useProductListing } from 'app/hooks/useData'
import { useProductScreenParams } from 'app/hooks/useProductScreenParams'
import { stringify } from 'querystring'
import { ProductsListingScreen } from 'app/features/products/productsListingScreen'

export default function Products() {
  const { getProductScreenParams, setProductScreenParams } =
    useProductScreenParams()

  // const [collections, setCollections] = useCollections()

  const { data, refetch, isLoading } = useProductListing(
    stringify(getProductScreenParams()),
    'ae-en',
  )

  return !isLoading && data ? (
    <ProductsListingScreen
      pageType="products"
      pageName={'Products'}
      data={{
        products: data.data.products,
      }}
      refetch={refetch}
      queryProps={{
        query: stringify(getProductScreenParams()),
        setQuery: setProductScreenParams,
      }}
    />
  ) : (
    <View>
      <H1> {stringify(getProductScreenParams())}</H1>
    </View>
  )
}
