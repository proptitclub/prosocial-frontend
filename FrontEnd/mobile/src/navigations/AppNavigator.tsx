import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from '../screens/SplashScreen'
import SignInScreen from '../screens/SignInScreen'
import { HomeNavigator } from './HomeNavigator'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name={'Splash'} component={SplashScreen} />
        <Stack.Screen name={'SignIn'} component={SignInScreen} />
        <Stack.Screen name={'HomeStack'} component={HomeNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

// const AppNavigator = createSwitchNavigator(
//   {
//     SplashStack: {
//       screen: SplashScreen,
//       navigationOptions: {
//         header: null,
//       },
//     },
//     AuthStack: createStackNavigator({
//       SignIn: {
//         screen: SignInScreen,
//         navigationOptions: {
//           header: null,
//         },
//       },
//     }),
//     HomeStack: {
//       screen: HomeNavigator,
//       navigationOptions: {
//         header: null,
//       },
//     },
//   },
//   {
//     initialRouteName: 'SplashStack',
//   },
// )

export default AppNavigator
