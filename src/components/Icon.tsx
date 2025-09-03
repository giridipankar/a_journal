import { StyleSheet, Text, View } from 'react-native';
import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';
import React from 'react';

export default function Icon({
  name,
  size,
  color,
}: {
  name: any;
  size: number;
  color: string;
}) {
  return <MaterialDesignIcons name={name} size={size} color={color} />;
}

const styles = StyleSheet.create({});
