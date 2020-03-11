import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SplashScreen from '../screens/SplashScreen'
import SignInScreen from '../screens/SignInScreen'
import HomeNavigator from './HomeNavigator'
import CreatePostScreen from '../screens/CreatePostScreen'

const AppNavigator = createSwitchNavigator(
  {
    SplashStack: {
      screen: SplashScreen,
      navigationOptions: {
        header: null,
      },
    },
    AuthStack: createStackNavigator({
      SignIn: {
        screen: SignInScreen,
        navigationOptions: {
          header: null,
        },
      },
    }),
    HomeStack: createStackNavigator({
      CreatePost: {
        screen: CreatePostScreen,
        navigationOptions: {
          header: null
        }
      },
      HomeStack: {
        screen: HomeNavigator,
        navigationOptions: {
          header: null
        }
      }
    }, {
      initialRouteName: "HomeStack"
    })
  },
  {
    initialRouteName: 'SplashStack',
  },
)

export default createAppContainer(AppNavigator)
