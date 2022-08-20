import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Screen2 = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function getTime(time) {
    const min = Math.floor(time / 60);
    const sec = time - min * 60;

    return {min, sec};
  }

  function toggle() {
    setIsActive(!isActive);
  }

  const {min, sec} = getTime(timer);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTimer(e => e + 1);
      }, 1000);
    } else if (!isActive) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timer]);

  return (
    <View>
      <Text>{`${min} : ${sec}`}</Text>
      <TouchableOpacity onPress={() => toggle()}>
        <Text>{isActive ? 'Pause' : 'Start'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen2;
