import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths } from 'date-fns';

type MoodType = 'happy' | 'sleepy' | 'sad' | 'angry' | 'mind-blowing'
type MoodEntries = Record<string, {mood: MoodType; color:string }>;

const MOOD_COLORS: Record<MoodType, string> = {
    happy: '#FFD700',
    sleepy: '#A9A9A9',
    sad: '#1E90FF',
    angry: '#FF4500',
    'mind-blowing': '#32CD32',
};

const CalendarScreen  = () => {
    const [currentDate, setCurrentDate] = useState(new Date('2025-03-01'));
    const [selectedDate, setSelectedDate] = useState('');
    const [moods, setMoods] = useState<MoodEntries>({});

    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(currentDate);
    const daysInMonth = eachDayOfInterval({ start:monthStart, end:monthEnd })

    const handleMonthChange = (direction: 'next' | 'prev') => {
        setCurrentDate(prev => direction === 'next' ? addMonths(prev, 1) : subMonths(prev, 1))
    };

    const handleDatePress = (date: Date) => {
        const dateString = format(date, 'yyyy-MM-DD')
        setSelectedDate(dateString)
    }

    const renderHeader = () => (
        <View style={styles.header}>
          <TouchableOpacity onPress={() => handleMonthChange('prev')}>
            <Text style={styles.arrow}>{'<'}</Text>
          </TouchableOpacity>
          <Text style={styles.title}>{format(currentDate, 'MMMM yyyy')}</Text>
          <TouchableOpacity onPress={() => handleMonthChange('next')}>
            <Text style={styles.arrow}>{'>'}</Text>
          </TouchableOpacity>
        </View>
      );

    const renderDayNames = () => (
        <View style={styles.dayNames}>
          {['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'].map(day => (
            <Text key={day} style={styles.dayName}>{day}</Text>
          ))}
        </View>
      );

    const renderDays = () => {
        const screenWidth = Dimensions.get('window').width
        const daySize = (screenWidth - 32) /7;

        return(
            <View style={styles.daysContainer}>
                {daysInMonth.map((date, index) => {
                    const dateString  = format(date, 'yyyy-MM-dd')
                    const isCurrentMonth = isSameMonth(date, currentDate)
                    const mood = moods[dateString]?.color
                    
                    return (
                        <TouchableOpacity key={index} style={[styles.day, {width: daySize,
                            height: daySize,
                            backgroundColor: isSameDay(date, new Date()) ? '#f0f0f0' : 'white',},]} onPress={() => handleDatePress(date)}>
                                 <Text style={[styles.dayText, !isCurrentMonth && styles.nonMonthDay]}>{format(date, 'd')}</Text>
                                {mood && <View style={[styles.moodDot, { backgroundColor: mood }]} />}                                    
                        </TouchableOpacity>
                    ) 
                })}
            </View>
        )
    }
    return (
        <View style={styles.container}>
          {renderHeader()}
          {renderDayNames()}
          {renderDays()}
        </View>
      );
    };
    
      
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          padding: 16,
        },
        header: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 20,
        },
        title: {
          fontSize: 20,
          fontWeight: 'bold',
        },
        arrow: {
          fontSize: 24,
          paddingHorizontal: 16,
        },
        dayNames: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: 10,
        },
        dayName: {
          fontSize: 14,
          color: '#666',
        },
        daysContainer: {
          flexDirection: 'row',
          flexWrap: 'wrap',
        },
        day: {
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: '#e0e0e0',
        },
        dayText: {
          fontSize: 16,
        },
        nonMonthDay: {
          color: '#c0c0c0',
        },
        moodDot: {
          position: 'absolute',
          bottom: 4,
          width: 8,
          height: 8,
          borderRadius: 4,
        },
      });
export default CalendarScreen;