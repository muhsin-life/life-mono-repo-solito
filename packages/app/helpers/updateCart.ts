import { CartSuccessProps } from 'app/types/cart-success'
import axios, { AxiosRequestConfig } from 'axios'

export default async function updateCartData(
  payload: PayloadProps,
  cartId: number,
) {
  const requestOptions: AxiosRequestConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Latitude: String(25.192622),
      Longitude: String(55.276383),
    },
  }

  const { data } = await axios.post(
    `https://prodapp.lifepharmacy.com/api/carts/v2/${cartId}/update`,
    JSON.stringify(payload),
    requestOptions,
  )

  return data as CartSuccessProps
}
