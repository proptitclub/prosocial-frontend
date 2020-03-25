import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from '../screens/SplashScreen'
import SignInScreen from '../screens/SignInScreen'
import NewsFeedScreen from '../screens/NewsFeedScreen'
import ProfileScreen from '../screens/ProfileScreen'
import { Icon } from 'native-base'
import PostDetailScreen from '../screens/PostDetailScreen'
import CreatePostScreen from '../screens/CreatePostScreen'
import NotificationScreen from '../screens/NotificationScreen'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

interface TabBarIconProps {
  focused: boolean
  color: string
  size: number
}

export const HomeNavigator = () => {
  return (
    <Tab.Navigator
      headerMode={'none'}
      screenOptions={({ route }: any) => ({
        tabBarIcon: ({ focused, color, size }: TabBarIconProps) => {
          let iconName
          switch (route.name) {
            case 'Home':
              iconName = 'home'
              break
            case 'Notification':
              iconName = 'bells'
              break
            case 'Profile':
              iconName = 'user'
              break
            default:
              iconName = 'home'
              break
          }
          return (
            <Icon
              name={iconName}
              type="AntDesign"
              style={{ color, fontSize: size }}
            />
          )
        },
      })}
      tabBarOptions={{
        activeTintColor: '#4580C2',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name={'Home'} component={NewsFeedScreen} />
      <Tab.Screen name={'Notification'} component={NotificationScreen} />
      <Tab.Screen name={'Profile'} component={ProfileScreen} />
    </Tab.Navigator>
  )
}

const NewsFeedStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={'Home'} component={NewsFeedScreen} />
      <Stack.Screen name={'Detail'} component={PostDetailScreen} />
      <Stack.Screen name={'CreatePost'} component={CreatePostScreen} />
    </Stack.Navigator>
  )
}

const NotiStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={'Notification'} component={NotificationScreen} />
      <Stack.Screen name={'Detail'} component={PostDetailScreen} />
    </Stack.Navigator>
  )
}
// const HomeNavigator = createBottomTabNavigator(
//   {
//     NewsFeed: {
//       screen: createStackNavigator({
//         NewFeed: {
//           screen: NewsFeedScreen,
//           navigationOptions: {
//             header: null,
//           },
//         },
//         Detail: {
//           screen: PostDetailScreen,
//           navigationOptions: {
//             header: null,
//           },
//         },
//       }),
//       navigationOptions: {
//         tabBarIcon: ({ focused, horizontal, tintColor }) => {
//           return (
//             <Icon name="home" type="AntDesign" style={{ color: tintColor }} />
//           )
//         },
//       },
//     },
//     Profile: {
//       screen: ProfileScreen,
//       navigationOptions: {
//         tabBarIcon: ({ focused, horizontal, tintColor }) => {
//           return (
//             <Icon name="user" type="AntDesign" style={{ color: tintColor }} />
//           )
//         },
//       },
//     },
//   },
//   {
//     initialRouteName: 'NewsFeed',
//     tabBarOptions: {
//       showLabel: false,
//     },
//   },
// )