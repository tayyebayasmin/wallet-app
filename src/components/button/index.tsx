import React from 'react';
import {
  ActivityIndicator,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {CustomText} from '~components';
import styles from './styles';
import AppColors from '~utils/AppColors';
import {FontFamily} from '~utils/Fontfamily';

type IButtonCommonProps = {
  title?: string;
  onPress: () => void;
  disabled?: boolean;
  containerStyle?: ViewStyle;
};

type IButtonProps = IButtonCommonProps & {
  isLoading?: boolean;
  loaderColor?: string;
  color?: string;
  size?: number;
  testID?: string;
  activeOpacity?: number;
};
const Button: React.FC<IButtonProps> = ({
  title,
  onPress,
  disabled = false,
  isLoading = false,
  loaderColor = AppColors.white,
  activeOpacity = 0.7,
  containerStyle = {},
  color = AppColors.white,
  size = 3.8,
  testID = 'button',
}) => {
  return (
    <TouchableOpacity
      testID={testID}
      onPress={onPress}
      disabled={disabled || isLoading}
      activeOpacity={activeOpacity}
      style={[styles.container, containerStyle]}>
      {isLoading ? (
        <ActivityIndicator color={loaderColor} size="large" testID="loader" />
      ) : (
        <CustomText color={color} size={size} font={FontFamily.appFontRegular}>
          {title}
        </CustomText>
      )}
    </TouchableOpacity>
  );
};

export default Button;

type IDropDownProps = IButtonCommonProps & {
  placeHolder?: string;
  value: string | null | undefined;
  searchIcon?: boolean;
  placeholderColor?: string;
  valColor?: string;
  mainContainer?: ViewStyle;
  Icon?: boolean;
};

export const DropDownButton: React.FC<IDropDownProps> = ({
  value,
  placeHolder = '',
  containerStyle,
  onPress,
  disabled = false,
  placeholderColor = AppColors.black40,
  title = '',
  valColor = AppColors.black,
  mainContainer,
}) => {
  return (
    <View style={mainContainer}>
      {title && (
        <CustomText
          fontFam={FontFamily.appFontMedium}
          size={4}
          color={AppColors.white}
          textStyles={styles.title}>
          {title}
        </CustomText>
      )}
      <TouchableOpacity
        testID="dropdownButton"
        activeOpacity={0.9}
        style={[styles.selectContainer, containerStyle]}
        disabled={disabled}
        onPress={onPress}>
        <CustomText
          color={value ? valColor : placeholderColor}
          size={3.5}
          font={FontFamily.appFontLight}
          numberOfLines={2}>
          {value ?? placeHolder}
        </CustomText>
      </TouchableOpacity>
    </View>
  );
};
