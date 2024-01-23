import { useFonts } from 'expo-font'

export function Font({ children }) {
  const [ready] = useFonts({
    ['Poppins-Black']: require('../../next/public/font/Poppins/Poppins-Black.ttf'),
    ['Poppins-Bold']: require('../../next/public/font/Poppins/Poppins-Bold.ttf'),
    ['Poppins-ExtraBold']: require('../../next/public/font/Poppins/Poppins-ExtraBold.ttf'),
    ['Poppins-ExtraLight']: require('../../next/public/font/Poppins/Poppins-ExtraLight.ttf'),
    ['Poppins-Light']: require('../../next/public/font/Poppins/Poppins-Light.ttf'),
    ['Poppins-Medium']: require('../../next/public/font/Poppins/Poppins-Medium.ttf'),
    ['Poppins-Regular']: require('../../next/public/font/Poppins/Poppins-Regular.ttf'),
    ['Poppins-Semibold']: require('../../next/public/font/Poppins/Poppins-SemiBold.ttf'),
    ['Poppins-Thin']: require('../../next/public/font/Poppins/Poppins-Thin.ttf'),
  })


  return <>{children}</>
}
