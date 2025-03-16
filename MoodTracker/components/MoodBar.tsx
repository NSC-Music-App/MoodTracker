import {StyleSheet, Animated } from 'react-native';
import { useEffect, useRef } from 'react';

const MoodBar = ({ height, mood }: { height: number; mood: string }) => {
  const animatedHeight = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedHeight, {
      toValue: height,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [height]);

  const getBarColor = (): string => {
    switch (mood) {
      case '😊':
        return '#90EE90';
      case '😐':
        return '#87CEEB'; 
      case '😢':
        return '#FF6347'; 
      default:
        return '#D3D3D3';
    }
  };

  return (
    <Animated.View
      style={[
        styles.moodBar,
        { height: animatedHeight, backgroundColor: getBarColor() },
      ]}
    />
  );
};

export default MoodBar

const styles = StyleSheet.create({
    moodBar: {
        flexDirection: 'column',
      width: 24,
      borderRadius: 12,
      marginVertical: 10,
    }
  });