import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            bottom: 30,
            marginLeft: 20, 
            marginRight: 20, 
            backgroundColor: 'rgba(255, 255, 255, 1)',
            height: 70,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
            overflow: 'hidden',
            zIndex: 1,
          },
          android: {
            position: 'absolute',
            bottom: 20,
            left: 20,
            right: 20,
            backgroundColor: 'rgba(255, 255, 255, 1)',
            height: 70,
            borderRadius: 25,
            elevation: 5, 
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <IconSymbol size={32} name="house.fill" color={color} style={{ marginTop: 25 }}/>,
        }}
      />
      <Tabs.Screen
        name="report"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <IconSymbol size={32} name="chart.bar.fill" color={color} style={{ marginTop: 25 }}/>,
        }}
      />
      <Tabs.Screen
        name="mood"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <IconSymbol size={60} name="plus.circle.fill" color={'#20A4F3'} style={{ marginTop: 25,shadowColor:'#20A4F3', shadowRadius:10}}/>,
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <IconSymbol size={32} name="star.fill" color={color} style={{ marginTop: 25 }}/>,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <IconSymbol size={32} name="person.fill" color={color} style={{ marginTop: 25 }}/>,
        }}
      />
    </Tabs>
  );
}
