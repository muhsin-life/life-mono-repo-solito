import { AnimatedView, View } from 'app/design/view'
import { Pressable } from 'react-native'
import * as Icon from 'react-native-feather'
import { useRouter } from 'solito/router'

const Header_Max_Height = 100
const Header_Min_Height = 0

export default function DynamicHeader({ animHeaderValue }) {
  const { back, push } = useRouter()

  const animateHeaderOpacity2 = animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: 'clamp',
  })

  return (
    <>
      <AnimatedView
        className={'absolute right-0 left-0 z-30 p-4 pt-5'}
        style={[
          {
            opacity: animateHeaderOpacity2 ?? 1 / 100,
          },
        ]}
      >
        <View className="flex-row flex-1 h-10 items-center justify-between">
          <Pressable
            onPress={() => back()}
            className=" w-9 h-9 bg-muted-foreground/80 text-white rounded-full items-center justify-center"
          >
            <Icon.ArrowLeft width={18} height={18} color={'white'} />
          </Pressable>
          <Pressable
            onPress={() => push('/search')}
            className=" w-9 h-9 bg-muted-foreground/80 text-white rounded-full items-center justify-center"
          >
            <Icon.Search width={18} height={18} color={'white'} />
          </Pressable>
        </View>
      </AnimatedView>
    </>
  )
}

// const styles = StyleSheet.create({
//   header: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     left: 0,
//     right: 0,
//     paddingTop: 10,
//   },
//   headerText: {
//     color: '#fff',
//     fontSize: 25,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// })
