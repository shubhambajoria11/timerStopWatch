import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

const Component1 = props => {
  console.log('props', useState);
  return (
    <View>
      <Text>{props.data}</Text>
    </View>
  );
};

export default Component1;
