import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Dimensions, Platform, ScaledSize } from 'react-native'
import { PriceElement } from 'app/types/products'

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

export const getCountryCodeFromLocale = (locale: locale) => {
  return locale.split('-')[0]
}

export const getPriceDataByLocale = (
  locale: locale,
  prices: PriceElement[],
) => {
  return prices.find(
    (price) => price.country_code === getCountryCodeFromLocale(locale),
  )
}

export function formatPrice(
  price: number | string,
  options: {
    currency?: 'SAR' | 'AED' | 'OMR'
    notation?: Intl.NumberFormatOptions['notation']
  } = {},
) {
  const { currency = 'AED', notation = 'compact' } = options

  const numericPrice = typeof price === 'string' ? parseFloat(price) : price

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    notation,
    maximumFractionDigits: 2,
  }).format(numericPrice)
}

export const getPayLoadData: (
  id: string,
  qty: number,
  itemLength: number,
) => PayloadProps = (id, qty, itemLength) => {
  if (itemLength > 0) {
    return {
      action: 'update_items',
      data: {
        items: [
          {
            id,
            qty,
          },
        ],
        address_id: null,
      },
    }
  }
  return {
    data: {
      items: [
        {
          id,
          qty,
        },
      ],
      address_id: null,
    },
  }
}

export function truncate(str: string, length: number) {
  return str.length > length ? `${str.substring(0, length)}...` : str;
}
