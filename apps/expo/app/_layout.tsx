import { Provider } from 'app/provider/index'
import { Stack } from 'expo-router'
import { Font } from './Fonts'

export default function Root() {
  return (
    <Provider>
      <Font>
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="search"
            options={{ presentation: 'fullScreenModal', headerShown: false }}
          />
        </Stack>
      </Font>
    </Provider>
  )
}
