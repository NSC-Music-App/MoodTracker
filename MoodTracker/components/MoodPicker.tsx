import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { MOOD_COLORS, MoodType } from './CalendarScreen';

type Props = {
  onSelect: (mood: MoodType) => void;
};

const MOOD_IMAGES: Record<MoodType, any> = {
    happy: require('../assets/images/emoji/happy.png'),
    sleepy: require('../assets/images/emoji/sleepy.png'),
    sad: require('../assets/images/emoji/sad.png'),
    angry: require('../assets/images/emoji/angry.png'),
    'Mind\nBlowing': require('../assets/images/emoji/mind-blowing.png'),
};

export default function MoodPicker({ onSelect }: Props) {
  return (
    <View style={styles.overlay}>
      <View style={styles.modal}>
        <Text style={styles.title}>How are you feeling today?</Text>
        <View style={styles.moodContainer}>
          {Object.entries(MOOD_COLORS).map(([mood, color]) => (
            <TouchableOpacity
              key={mood}
              style={styles.moodOption}
              onPress={() => onSelect(mood as MoodType)}
              accessibilityLabel={`Select ${mood} mood`}
            >
              <Image 
                source={MOOD_IMAGES[mood as MoodType]} 
                style={styles.moodImage} 
                accessibilityLabel={mood}
              />
              <Text style={styles.moodText}>{mood}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  moodContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  moodOption: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  moodText: {
    color: '#fff',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    fontSize: 12,
    textAlign: 'center',

  },
  moodImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
});