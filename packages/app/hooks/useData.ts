import { useQuery } from "@tanstack/react-query";
import getPageData from "app/helpers/getPageData";
import getProducts from "app/helpers/getProducts";
import { PageProps } from "app/types/page";
import { ProductProps } from "app/types/products";


export const useProducts = (type_key: string, slug: string, locale:locale) => {
    return useQuery({
      queryKey: ["get-products", slug],
      queryFn: async () =>
        (await getProducts(type_key, slug, locale as locale)) as ProductProps,
    });
  };

  export const usePagesData = (locale: locale, pageName: string) => {
    return useQuery({
      queryKey: ["get-page-data", locale, pageName],
      queryFn: async () => {
        const data = await getPageData(locale, pageName);
        return data as PageProps;
      },
    });
  };