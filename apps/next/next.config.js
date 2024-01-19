const { withExpo } = require('@expo/next-adapter')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reanimated (and thus, Moti) doesn't work with strict mode currently...
  // https://github.com/nandorojo/moti/issues/224
  // https://github.com/necolas/react-native-web/pull/2330
  // https://github.com/nandorojo/moti/issues/224
  // once that gets fixed, set this back to true
  reactStrictMode: false,
  images: {
    domains: [
      "www.lifepharmacy.com",
      "life-cdn.lifepharmacy.com",
      "lifeadmin-app.s3.me-south-1.amazonaws.com",
    ],
  },
  transpilePackages: [
    'expo-image',
    'react-native',
    'react-native-web',
    'solito',
    'moti',
    'app',
    'react-native-reanimated',
    'nativewind',
    'react-native-gesture-handler',
    'react-native-easy-grid',
    'react-native-svg',
    'react-native-feather', 
    'react-native-reanimated-carousel',
  ],
}

module.exports = withExpo(nextConfig)
