import Colors from 'src/constants/Colors';
import useColorScheme from 'src/hooks/useColorScheme';
import { IconProps } from 'react-native-vector-icons/Icon';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  ITextProps,
  Row as DefaultRow,
  Text as DefaultText,
  View as DefaultView,
} from 'native-base';
import { IHStackProps } from 'native-base/lib/typescript/components/primitives/Stack/HStack';
import TextTickerDefault from 'react-native-text-ticker';
import { IViewProps } from 'native-base/lib/typescript/components/basic/View/types';

export const useThemeColor = (
  props: { light?: string; dark?: string },
  colorNme: keyof typeof Colors.light & keyof typeof Colors.dark,
) => {
  const theme = useColorScheme();

  const colorFromProps = props[theme];

  if (colorFromProps) return colorFromProps;
  else return Colors[theme][colorNme];
};

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

interface IText extends ITextProps, ThemeProps {}
export const Text = (props: IText) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
};

interface IView extends IViewProps, ThemeProps {}
export const View = (props: IView) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background',
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
};

export const TransparentView = (props: IView) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  return (
    <DefaultView
      style={[{ backgroundColor: 'transparent' }, style]}
      {...otherProps}
    />
  );
};

export type RowProps = ThemeProps & IHStackProps;
export const Row = (props: RowProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  return (
    <DefaultRow
      style={[{ backgroundColor: 'transparent' }, style]}
      {...otherProps}
    />
  );
};

export type MaterialIconProps = ThemeProps & IconProps;
export const MaterialIcon = (props: MaterialIconProps) => {
  const { lightColor, darkColor, ...rest } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'icon');

  return <MaterialIcons color={color} {...rest} />;
};

export type TextTickerProps = ThemeProps & TextTickerDefault['props'];
export const TextTicker = (props: TextTickerProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <TextTickerDefault style={[{ color }, style]} {...otherProps} />;
};
