import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';

/**
 * Highlight TouchableWithoutFeedback -> Paste with TouchableOpacity.
 * Showcase AutoRename extension.
 * Note that this is not a good example to build reusable components.
 */

const AutoRename = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.log('You are the bomb')}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/176/176495.png',
          }}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableWithoutFeedback onPress={() => console.log('You clicked you')}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/3158/3158955.png',
          }}
          style={styles.icon}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default AutoRename;

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    height: 40,
    width: 40,
  },
});
