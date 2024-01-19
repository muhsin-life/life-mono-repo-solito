import { PageProps } from "app/types/page";
import axios from "axios";

export default async function getPageData(locale: string, pageType: string) {
  const { data } = await axios.get(
    `https://prodapp.lifepharmacy.com/api/cms/page/${pageType}?lang=${locale}`
  );

  return data as PageProps;
}
