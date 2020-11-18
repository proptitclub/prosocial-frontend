import BaseService from './BaseService'
import { User, ImageFormData, UserInfo } from '../core'
import Axios from 'axios'
import { Alert } from 'react-native'

class AuthUserService extends BaseService<User> {
  constructor() {
    super()
    this.baseURL += 'auth/users/me/'
  }

  updateAvatar(formData: ImageFormData): Promise<User> {
    const data = new FormData()
    data.append('avatar', formData)
    return Axios.patch(this.baseURL, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then((res) => {
        return res.data
      })
      .catch((err) => {
        console.log(err)
        Alert.alert('Check your Internet Connection!')
        throw err
      })
  }

  updateUserInfo(userData: UserInfo): Promise<string> {
    return Axios.patch(this.baseURL, userData)
      .then((res) => {
        console.log(res.status)
        return 'success'
      })
      .catch((err) => {
        console.log(err)
        Alert.alert('Check your Internet Connection!')
        return 'error'
      })
  }
}

export const authUserService = new AuthUserService()
