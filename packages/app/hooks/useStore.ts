// @ts-nocheck
import { CartDetails, Store } from 'app/types/store'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { STORE_DATA_INIT } from 'app/config'
import AsynStorage from '@react-native-async-storage/async-storage'

export interface StoreState {
  store: Store
  updateCart: (cart: CartDetails) => void
}

export const useStore = create<StoreState>(
  persist(
    (set) => ({
      store: { ...STORE_DATA_INIT },
      updateCart: (cart) => {
        set((state) => {
          return {
            store: {
              ...state.store,
              cart: {
                ...state.store.cart,
                cart: { ...cart },
              },
            },
          }
        })
      },
    }),
    {
      name: 'lifestore',
      getStorage: () => AsynStorage,
    },
  ),
)
