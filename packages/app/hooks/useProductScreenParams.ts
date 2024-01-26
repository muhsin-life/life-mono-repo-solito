import { createParam } from 'solito'

type ProductParams = {
  collections?: string
  categories?: string
  brands?: string
}

const { useParam } = createParam<ProductParams>()

export const useProductScreenParams = () => {
  const [collections, setCollections] = useParam('collections')
  const [categories, setCategories] = useParam('categories')
  const [brands, setBrands] = useParam('brands')

  const getProductScreenParams = () => {
    return {
      collections,
      categories,
      brands,
    }
  }

  const setProductScreenParams = () => {
    return {
      setCollections,
      setCategories,
      setBrands,
    }
  }
  return {
    getProductScreenParams,
    setProductScreenParams,
  }
}
