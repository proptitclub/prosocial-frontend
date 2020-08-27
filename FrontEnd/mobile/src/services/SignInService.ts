import Axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import { User, AuthToken } from '../core'

class SignInService {
  protected authURL = 'http://apis.aiforce.xyz/auth/jwt/create/'
  protected userAuthURL = 'http://apis.aiforce.xyz/auth/users/me/'
  protected refreshTokenURL = 'http://apis.aiforce.xyz/auth/jwt/refresh/'

  requestSignIn(username: string, password: string): Promise<AuthToken> {
    return Axios.post(this.authURL, { username: username, password: password })
      .then(async (res) => {
        await AsyncStorage.setItem(
          'authToken',
          JSON.stringify(res.data),
          (err) => console.log(err),
        )
        Axios.defaults.headers.Authorization = `Bearer ${res.data.access}`
        return res.data
      })
      .catch((err) => {
        console.log('ERR ON SIGN IN', err)
        return null
      })
  }

  getUserAfterAuth(accessKey: string): Promise<User | null> {
    return Axios.get(this.userAuthURL, {
      headers: {
        authorization: `Bearer ${accessKey}`,
      },
    })
      .then(async (res) => {
        await AsyncStorage.setItem(
          'userData',
          JSON.stringify(res.data),
          (err) => {
            console.log(err)
          },
        )
        return res.data
      })
      .catch((err) => {
        console.log(err)
        return null
      })
  }

  refreshToken(refreshToken: string): Promise<AuthToken | null> {
    return Axios.post(this.refreshTokenURL, { refresh: refreshToken })
      .then(async (res) => {
        const authToken: AuthToken = {
          refresh: refreshToken,
          access: res.data.access,
        }
        Axios.defaults.headers.Authorization = `Bearer ${res.data.access}`
        await AsyncStorage.setItem(
          'authToken',
          JSON.stringify(authToken),
          (err) => {
            console.log(err)
          },
        )
        return authToken
      })
      .catch((err) => {
        console.log(err)
        return null
      })
  }
}

export const signInService = new SignInService()
