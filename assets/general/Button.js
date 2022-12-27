import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { colors } from '../../style/styles';
export default function Button(props) {
  const { onPress, title = 'Indietro' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginVertical: 12,
    // borderRadius: 4,
    // borderWidth: 1,
    elevation: 3,
    backgroundColor: colors.light,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: colors.dark,
  },
});