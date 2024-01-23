import { View } from 'app/design/view'
import MaxWidthWrapper from './MaxWidthWrapper'
import { TextInput } from 'app/design/input'
import { SolitoImage } from 'solito/image'
import * as Icon from 'react-native-feather'
import { Link } from 'solito/link'
import { useRouter } from 'solito/router'
import { isWeb } from 'app/lib/utils'
import { NativeSyntheticEvent } from 'react-native'
import { NativeTouchEvent } from 'react-native'

const Navbar = () => {
  const { push } = useRouter()

  const onSearchBarClick = (e: NativeSyntheticEvent<NativeTouchEvent>) => {
    e.preventDefault()
    push('/search')
  }

  return (
    <MaxWidthWrapper>
      <View className="flex-row items-center justify-center h-12 pb-2 border-b border-slate-100 ">
        <Link href={'/'} className=" mr-2 flex-col justify-center">
          <SolitoImage
            src={'https://www.lifepharmacy.com/images/life.svg'}
            height={40}
            width={40}
            alt="Logo"
            style={{
              aspectRatio: 1,
            }}
          />
        </Link>
        <View className="relative flex-1 px-4  bg-slate-50/50 rounded-xl h-full justify-center border-slate-100 border">
          <Icon.Search
            color="gray"
            width={17}
            height={17}
            style={{
              position: 'absolute',
              left: 10,
            }}
          />

          <TextInput
            onPressIn={onSearchBarClick}
            className="h-full w-full text-sm pl-5 "
            //   value={searchTerm}
            //   onChangeText={(text) => setSearchTerm(text)}
            placeholder="What are you looking for?"
          />
        </View>
      </View>
    </MaxWidthWrapper>
  )
}

export default Navbar
