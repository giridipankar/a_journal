import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';

type Props = {
  style?: StyleProp<ViewStyle>;
  right?: React.ReactNode;
} & TextInputProps;

export default function AppInput({ style, right, ...props }: Props) {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        {...props}
        style={styles.input}
        textAlignVertical={props.multiline ? 'top' : 'center'}
      />
      {right}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#E5E5E5', // Using a standard gray color since Colors module is not found
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
  input: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 14,
  },
});
