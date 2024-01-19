import Navbar from 'app/components/Navbar'
import { PageStructure } from 'app/components/PageStructure'
import { View } from 'app/design/view'
import { PageData } from 'app/types/page'
import { ScrollView } from 'moti'

interface HomePageProps{
  data:PageData
  }

export function HomeScreen({data}:HomePageProps) {
  return (
  <View className={"flex-1 bg-white"}>
  <Navbar/>
  <ScrollView
  horizontal={false}
  style={{
    backgroundColor:"white", 
    flex:1
  }}
    >
        {data.content.map((content)=>(
        <PageStructure content={content} key={content.order_id}/>
          ))}
              </ScrollView>
          </View>
  )
}
