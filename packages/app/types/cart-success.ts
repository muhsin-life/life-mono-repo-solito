import { CartDetails } from "./store"

export interface CartSuccessProps {
  success: boolean
  message: string
  data: CartDetails
}
