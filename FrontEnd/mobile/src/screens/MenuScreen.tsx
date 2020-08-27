import React, { Component } from 'react'
import {
  View,
  Button,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParams } from '../navigations/AppNavigator'
import colors from '../values/colors'
import styles from '../values/styles'
import Ionicon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import ItemGroup from '../components/itemgroup/ItemGroup'
import { Dispatch, AnyAction, bindActionCreators } from 'redux'
import { signInAction } from '../core/actions'
import { connect } from 'react-redux'
import { signOut, AppState, SignInState, Group, User, MiniGroup } from '../core'
import { images } from '../assets'
import { groupService } from '../services/GroupService'

interface MenuScreenProps {
  navigation: StackNavigationProp<RootStackParams>
  signOut: typeof signOut
  currentUser: User
}

interface MenuScreenState {
  isExpandedGroup: boolean
  isExpandedSetting: boolean
  listGroup?: MiniGroup[]
}

class MenuScreen extends Component<MenuScreenProps, MenuScreenState> {
  constructor(props: MenuScreenProps) {
    super(props)

    this.state = {
      isExpandedGroup: false,
      isExpandedSetting: false,
      listGroup: this.props.currentUser?.participatingGroup,
    }
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView style={{ width: '100%', height: '100%', padding: 10 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={[styles.bold_text, { fontSize: 25, marginBottom: 20 }]}>
              Menu
            </Text>
            <TouchableOpacity>
              <Ionicon name="md-search" size={30} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              flexDirection: 'row',
            }}
            onPress={() => {
              this.props.navigation.navigate('Profile', {
                userId: this.props.currentUser.id!,
              })
            }}>
            <Image
              source={{ uri: this.props.currentUser.avatar }}
              style={styles.normal_icon}
            />
            <Text style={[styles.bold_text, { marginLeft: 10 }]}>
              {this.props.currentUser.displayName}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.onPressGroup()
            }}>
            <View
              style={{
                borderBottomColor: 'gray',
                borderBottomWidth: 0.3,
                width: '100%',
                height: 50,
                paddingHorizontal: 20,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <MaterialIcon name="group" size={20} />
              <Text
                style={[
                  styles.bold_text,
                  { fontSize: 15, flex: 1, marginLeft: 20 },
                ]}>
                Group
              </Text>
              <Ionicon
                name={
                  this.state.isExpandedGroup ? 'ios-arrow-up' : 'ios-arrow-down'
                }
                size={20}
              />
            </View>
          </TouchableOpacity>
          <View style={{ paddingLeft: 30 }}>
            {this.state.isExpandedGroup && this.state.listGroup
              ? this.state.listGroup.map((group) => {
                  console.log(group.id)
                  if (group.id !== 1) {
                    return (
                      <ItemGroup
                        name={group.name}
                        cover={group.cover}
                        onPress={() => {
                          this.props.navigation.navigate('Group', {
                            groupId: group.id,
                          })
                        }}
                      />
                    )
                  }
                })
              : null}
          </View>
          <TouchableOpacity
            onPress={() => {
              this.onPressSetting()
            }}>
            <View
              style={{
                borderBottomColor: 'gray',
                borderBottomWidth: 0.3,
                width: '100%',
                height: 50,
                paddingHorizontal: 20,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Ionicon name="md-settings" size={20} />
              <Text
                style={[
                  styles.bold_text,
                  { fontSize: 15, flex: 1, marginLeft: 20 },
                ]}>
                Setting
              </Text>
              <Ionicon
                name={
                  this.state.isExpandedSetting
                    ? 'ios-arrow-up'
                    : 'ios-arrow-down'
                }
                size={20}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onPressLogout}>
            <View
              style={{
                borderBottomColor: 'gray',
                borderBottomWidth: 0.3,
                width: '100%',
                height: 50,
                paddingHorizontal: 20,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <MaterialIcon name="power-settings-new" size={20} />
              <Text
                style={[
                  styles.bold_text,
                  { fontSize: 15, flex: 1, marginLeft: 20 },
                ]}>
                Logout
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    )
  }
  onPressLogout = async () => {
    await this.props.signOut()
    this.props.navigation.navigate('SignIn')
  }
  onPressSetting() {
    this.setState({
      isExpandedSetting: !this.state.isExpandedSetting,
    })
  }
  onPressGroup() {
    this.setState({
      isExpandedGroup: !this.state.isExpandedGroup,
    })
  }
}

const mapStateToProps = (state: AppState) => ({
  currentUser: state.signin.currentUser!,
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(signInAction, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen)
