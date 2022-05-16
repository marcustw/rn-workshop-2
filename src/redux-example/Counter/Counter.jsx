import React from 'react';
import { Button, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../redux/counter';

/**
 * Reference: https://react-redux.js.org/tutorials/quick-start
 */

const Counter = () => {
  const state = useSelector((state) => state.counter);
  const { count, title } = state;
  const dispatch = useDispatch();

  return (
    <View style={{ justifyContent: 'center', marginBottom: 12 }}>
      <Text style={{ fontSize: 64 }}>{`${title}${count}`}</Text>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          justifyContent: 'space-between',
          width: 200,
          marginBottom: 8,
        }}
      >
        <Button title="Increment" onPress={() => dispatch(increment())} />
        <Button title="Decrement" onPress={() => dispatch(decrement())} />
      </View>
    </View>
  );
};

export default Counter;
