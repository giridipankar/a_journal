import { StyleSheet, Text, TextProps, View } from 'react-native';
import React from 'react';

type Props = {
  size?: number;
  bold?: boolean;
  weight?: 'normal' | 'bold';
  color?: string;
  children: React.ReactNode;
} & TextProps;

const FONT_SIZES = {
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
};

export default function AppText({
  size = 12,
  bold = false,
  weight = 'normal',
  color = 'black',
  children,
  ...props
}: Props) {
  return (
    <Text
      {...props}
      style={[
        { fontSize: size, fontWeight: bold ? 'bold' : weight, color },
        props.style,
      ]}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({});
