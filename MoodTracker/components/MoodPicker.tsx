import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { MOOD_COLORS, MoodType } from './CalendarScreen'; 

type Props = {
  onSelect: (mood: MoodType) => void;
};

export default function MoodPicker({ onSelect }: Props) {
  return (
    <View style={styles.modal}>
      {Object.entries(MOOD_COLORS).map(([mood, color]) => (
        <TouchableOpacity
          key={mood}
          style={[styles.moodOption, { backgroundColor: color }]}
          onPress={() => onSelect(mood as MoodType)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -100 }, { translateY: -50 }],
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    gap: 10,
    elevation: 5,
  },
  moodOption: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
})
