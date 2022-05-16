import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Refactor = () => {
  return (
    <View>
      <Text>Refactor</Text>
      <View style={styles.weird}>
        <Text>First Box</Text>
      </View>
      <View style={styles.weird}>
        <Text>Second Box</Text>
      </View>
      <View style={styles.weird}>
        <Text>Third Box</Text>
      </View>
    </View>
  );
};

export default Refactor;

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
