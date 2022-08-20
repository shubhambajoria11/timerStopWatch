import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Component1 from '../../components/component1';
import Screen1 from '../Screen1';

const HomeScreen = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function getRemaining(time) {
    let mins = Math.floor(time / 60);
    let secs = time - mins * 60;
    return {mins, secs};
  }
  const toggle = () => {
    setIsActive(!isActive);
  };

  const {mins, secs} = getRemaining(timer);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTimer(remainingSec => remainingSec + 1);
      }, 1000);
    } else if (!isActive && timer !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timer]);

  return (
    <View style={styles.topContainer}>
      <Component1 data={`${mins} : ${secs}`} />
      <Button
        title={isActive ? 'Pause Timer' : 'Start Timer'}
        onPress={() => toggle()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    // backgroundColor: '#07121B',
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default HomeScreen;
