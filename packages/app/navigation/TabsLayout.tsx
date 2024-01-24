import { Text } from 'app/design/typography'
import { Icons } from 'app/components/Icons'
import { View } from 'app/design/view'
import { themeColors } from 'app/config'
import { Tabs } from 'expo-router'
import { SvgProps } from 'react-native-svg'

export default function TabsLayout() {
  type TTab =
    | 'index'
    | 'category-menu'
    | 'prescription-upload'
    | 'dashboard'
    | 'cart'
    | '[pages]/index'

  interface TTabItem {
    title: string
    route: TTab
    Icon: (SvgProps) => JSX.Element
  }

  const TabItems: TTabItem[] = [
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
    {
      title: '',
      route: '[pages]/index',
      Icon: Icons.cartIcon,
    },
  ]

  const getTabRoute = (route: TTab) => {
    switch (route) {
      case 'index':
        return '/'
      case '[pages]/index':
        return null
      default:
        return `/${route}`
    }
  }

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
            href: getTabRoute(tab.route),
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
