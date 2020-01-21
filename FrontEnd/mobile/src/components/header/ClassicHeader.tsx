import React from "react";
import PropTypes from "prop-types";
import { SafeAreaView, View, Text, TouchableOpacity, StyleProp, ViewProps, Insets, Platform, ViewStyle } from "react-native";
import IconIonicons from "react-native-vector-icons/Ionicons";
import IconAntDesign from "react-native-vector-icons/AntDesign"
// Styles
import _styles, {
  container,
  _shadowStyle,
  innerContainer,
  _leftComponentStyle,
  _rightComponentStyle
} from "./ClassicHeader.style";
import colors from "../../values/colors";

const hitSlop = {
  top: 30,
  bottom: 30,
  left: 30,
  right: 30
};

export interface ClassicHeaderProps {
  styles?: StyleProp<ViewProps>,
  hitSlops?: Insets,
  shadowStyle?: StyleProp<ViewProps>,
  headerTitle?: string,
  shadowColor?: string,
  leftComponent?: React.Component,
  rightComponent?: React.Component,
  centerComponent?: React.Component,
  statusBarHidden?: boolean,
  leftComponentStyle?: StyleProp<ViewStyle>,
  rightComponentStyle?: StyleProp<ViewStyle>,
  leftComponentDisable?: boolean,
  leftComponentOnPress?: () => void,
  centerComponentStyle?: StyleProp<View>,
  rightComponentDisable?: boolean,
  rightComponentOnPress?: () => void,
  height?: string | number,
  width?: string | number,
  backgroundColor: string
}

const ClassicHeader = (props: ClassicHeaderProps) => {
  const {
    styles,
    hitSlops,
    shadowStyle,
    headerTitle,
    shadowColor,
    leftComponent,
    rightComponent,
    centerComponent,
    statusBarHidden,
    leftComponentStyle,
    rightComponentStyle,
    leftComponentDisable,
    leftComponentOnPress,
    centerComponentStyle,
    rightComponentDisable,
    rightComponentOnPress
  } = props;
  return (
    <SafeAreaView>
      <View
        style={[
          styles || container(props),
          shadowStyle || _shadowStyle(shadowColor)
        ]}
      >
        <View style={[innerContainer(statusBarHidden)]}>
          {leftComponent || (
            <TouchableOpacity
              style={
                leftComponentStyle || _leftComponentStyle(leftComponentDisable)
              }
              hitSlop={hitSlops}
              onPress={leftComponentOnPress}
            >
              {
                Platform.OS == "ios" ?
                  (<IconIonicons
                    size={30}
                    name="ios-arrow-back"
                    color={colors.mainBlue}
                  // {...props}
                  />) :
                  <IconAntDesign
                    size={30}
                    name="arrowleft"
                    color={colors.mainBlue}
                  // {...props}
                  />
              }
            </TouchableOpacity>
          )}
          {centerComponent || (
            <Text style={[centerComponentStyle, { color: 'black' }]}>{headerTitle}</Text>
          )}
          {rightComponent || (
            <TouchableOpacity
              style={
                rightComponentStyle ||
                _rightComponentStyle(rightComponentDisable)
              }
              hitSlop={hitSlops}
              onPress={rightComponentOnPress}
            >
              <IconIonicons
                name="ios-menu"
                size={30}
                color="white"
                {...props}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

ClassicHeader.propTypes = {
  hitSlops: PropTypes.object,
  ratings: PropTypes.string
};

ClassicHeader.defaultProps = {
  hitSlops: hitSlop,
  centerComponentStyle: _styles.centerComponentStyle
};

export default ClassicHeader;