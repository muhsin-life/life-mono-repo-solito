import { HomeScreen } from 'app/features/home/screen'
import { GetStaticProps } from 'next';
import getPageData from "app/helpers/getPageData"
import { PageData } from 'app/types/page';

export default function Home({data}:{data:PageData}) {
    return (
    <HomeScreen data={data}/>
    )
  }

  export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const data = await getPageData(locale ?? "ae-en", "home");
    return {
      props: {
        data: data.data,
      },
    };
  };

  
