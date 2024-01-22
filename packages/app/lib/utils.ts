import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Dimensions, Platform, ScaledSize } from 'react-native'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getImageAspectRatio = ({
  width,
  height,
}: {
  width: number | null | undefined
  height: number | null | undefined
}) => {
  return (width ?? 1400) / (height ?? 500)
}

export const isIos = Platform.OS === 'ios'
export const isAndroid = Platform.OS === 'android'
export const isWeb = Platform.OS === 'web'

export const window: ScaledSize = isWeb
  ? {
      ...Dimensions.get('window'),
      width: 700,
    }
  : Dimensions.get('window')

  