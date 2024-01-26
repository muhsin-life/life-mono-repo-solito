import { useQuery } from '@tanstack/react-query'
import getPageData from 'app/helpers/getPageData'
import getProducts from 'app/helpers/getProducts'
import getProductListing from 'app/helpers/getProductsListing'
import { PageProps } from 'app/types/page'
import { ProductProps } from 'app/types/products'
import { SearchSuggestionProps } from 'app/types/searchSuggestions'
import axios, { AxiosRequestConfig } from 'axios'

export const useProducts = (type_key: string, slug: string, locale: locale) => {
  return useQuery({
    queryKey: ['get-products', slug],
    queryFn: async () =>
      (await getProducts(type_key, slug, locale as locale)) as ProductProps,
  })
}

export const usePagesData = (locale: locale, pageName: string) => {
  return useQuery({
    queryKey: ['get-page-data', locale, pageName],
    queryFn: async () => {
      const data = await getPageData(locale, pageName)
      return data as PageProps
    },
  })
}

export const useSearchSuggestion = (query: string, locale: locale) => {
  return useQuery({
    queryKey: [`get-search-suggestions`, query],
    queryFn: async () => {
      const headers = {
        'X-Algolia-API-Key': 'c54c5f0fc2e6bd0c3b97cfa5b3580705',
        'X-Algolia-Application-Id': 'WHCXS2GWOG',
        'Content-Type': 'application/json',
      }

      const requestBody = {
        requests: [
          {
            indexName: 'products',
            params: `query=${query}`,
            hitsPerPage: 8,
          },
          {
            indexName: 'products_query_suggestions',
            params: `query=${query}`,
          },

          {
            indexName: 'brands',
            params: `query=${query}`,
            hitsPerPage: 10,
          },
          {
            indexName: 'categories',
            params: `query=${query}`,
            hitsPerPage: 6,
          },
        ],
        strategy: 'none',
      }

      var requestOptions: AxiosRequestConfig = {
        method: 'POST',
        headers,
      }

      const { data } = await axios.post(
        `https://WHCXS2GWOG-dsn.algolia.net/1/indexes/*/queries?lang=${locale}`,
        JSON.stringify(requestBody),
        requestOptions,
      )

      return data as SearchSuggestionProps
    },
    staleTime: 1000,
  })
}

export const useProductListing = (filters: string, locale: locale) => {
  return useQuery({
    queryKey: ['get-product-listing', filters],
    queryFn: async () => {
      const data = await getProductListing({ locale, filters })
      return data as ProductProps
    },
  })
}
