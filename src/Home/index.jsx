import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Counter from '../redux-example/Counter/Counter';
import AutoRename from '../extensions/AutoRename';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Counter />
      <AutoRename />
      <Pressable onLongPress={() => navigation.navigate('Profile')}>
        <View style={styles.button}>
          <Text>Go</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 80,
    height: 16,
    backgroundColor: '#F01234',
    alignItems: 'center',
  },
});
