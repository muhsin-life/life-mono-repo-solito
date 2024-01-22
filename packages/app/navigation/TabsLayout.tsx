import { Tabs } from 'expo-router'
import { View } from 'app/design/view'
import { Text } from 'app/design/typography'
import { Icons } from 'app/components/Icons'

export default function TabsLayout() {
  const TabItems = [
    {
      title: 'Home',
      route: 'index',
      Icon: Icons.userIcon,
    },
    {
      title: 'Category',
      route: 'category-menu',
      Icon: Icons.categoryMenu,
    },
    {
      title: 'Rx Upload',
      route: 'prescription-upload',
      Icon: Icons.prescriptionIcon,
    },
    {
      title: 'Profile',
      Icon: Icons.userIcon,
    },
    {
      title: 'Cart',
      Icon: Icons.cartIcon,
    },
  ]

  return (
    <Tabs initialRouteName="index">
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: '',
          href: '/',
          tabBarIcon: () => {
            return (
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginTop: 17,
                  backgroundColor: 'transparent',
                }}
              >
                <Icons.userIcon
                  width={23}
                  height={23}
                  color={'red'}
                  fill={'red'}
                />
                <Text className="text-xs">Home</Text>
              </View>
            )
          },
        }}
      />
      <Tabs.Screen
        name="category-menu"
        options={{
          headerShown: false,
          title: '',
          href: '/category-menu',
          tabBarIcon: () => {
            return (
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginTop: 17,
                  backgroundColor: 'transparent',
                }}
              >
                <Icons.categoryMenu
                  width={20}
                  height={20}
                  color={'red'}
                  fill={'red'}
                />
                <Text className="text-xs">Category</Text>
              </View>
            )
          },
        }}
      />
    </Tabs>
  )
}
