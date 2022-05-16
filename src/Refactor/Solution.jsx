import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Box = ({ text }) => {
  return (
    <View style={styles.weird}>
      <Text>{text}</Text>
    </View>
  );
};

const RefactorTest = () => {
  return (
    <View style={styles.container}>
      <Text>index</Text>
      <Box text="First Box" />
      <Box text="Second Box" />
      <Box text="Third Box" />
    </View>
  );
};

export default RefactorTest;

const styles = StyleSheet.create({
  container: {
    width: 128,
    height: 64,
  },
  weird: {
    width: 12,
    height: 12,
  },
});
