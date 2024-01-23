import { Tabs } from 'expo-router'
import { Text } from 'app/design/typography'
import { Icons } from 'app/components/Icons'
import { View } from 'app/design/view'
import { themeColors } from 'app/config'

export default function TabsLayout() {
  const TabItems = [
    {
      title: 'Home',
      route: 'index',
      Icon: Icons.homeIcon,
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
      route: 'dashboard',
      Icon: Icons.userIcon,
    },
    {
      title: 'Cart',
      route: 'cart',
      Icon: Icons.cartIcon,
    },
  ]

  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          alignItems: 'center',
          paddingTop: 12,
        },
      }}
    >
      {TabItems.map((tab) => (
        <Tabs.Screen
          key={tab.title}
          name={tab.route}
          options={{
            headerShown: false,
            title: '',
            href: `/${tab.route !== 'index' ? tab.route : ''}`,
            tabBarIcon: ({ focused }) => {
              return (
                <View className="flex-col items-center">
                  <tab.Icon
                    width={23}
                    height={23}
                    color={
                      focused
                        ? themeColors.secondary.DEFAULT
                        : themeColors.muted.foreground
                    }
                  />
                  <Text className="text-xs">{tab.title}</Text>
                </View>
              )
            },
          }}
        />
      ))}
    </Tabs>
  )
}
