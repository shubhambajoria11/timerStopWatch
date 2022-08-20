/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import HomeScreen from './screens/Home';
import Screen2 from './screens/Screen2';

const App = () => {
  return (
    <SafeAreaView>
      <Screen2 />
    </SafeAreaView>
  );
};

export default App;
