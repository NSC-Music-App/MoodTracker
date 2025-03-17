import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { ThemedView } from "@/components/ThemedView";
import { Foundation } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        // tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
            bottom: "3.5%",
            marginLeft: "5%",
            marginRight: "5%",
            // backgroundColor: "rgba(255, 255, 255, 1)",
            height: 70,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
            overflow: "hidden",
            zIndex: 1,
          },
          android: {
            position: "absolute",
            bottom: "3.5%",
            marginLeft: "5%",
            marginRight: "5%",
            // backgroundColor: "rgba(255, 255, 255, 1)",
            height: 70,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
            overflow: "hidden",
            elevation: 2,
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        // style={{alignSelf: "center"}}
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <ThemedView style={{justifyContent: 'center', alignItems: 'center',backgroundColor: 'transparent',height:'100',paddingTop:'100%'}}>
              <Foundation
                size={32}
                name="home"
                color={color}
              />
            </ThemedView>
          ),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <ThemedView style={{justifyContent: 'center', alignItems: 'center',backgroundColor: 'transparent',height:'100',paddingTop:'100%'}}>
              <FontAwesome6
                size={32}
                name="calendar"
                color={color}
              />
            </ThemedView>
          ),
        }}
      />
      <Tabs.Screen
        name="mood"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <ThemedView style={{justifyContent: 'center', alignItems: 'center',backgroundColor: 'transparent',height:'100',width:'100',paddingTop:'100%'}}>
            <Entypo
              size={60}
              name="circle-with-plus"
              color={"#20A4F3"}
              style={{
              }}
            />
            </ThemedView>
          ),
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <ThemedView style={{justifyContent: 'center', alignItems: 'center',backgroundColor: 'transparent',height:'100',width:'100',paddingTop:'100%'}}>
            <AntDesign
              size={32}
              name="star"
              color={color}
            />
            </ThemedView>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <ThemedView style={{justifyContent: 'center', alignItems: 'center',backgroundColor: 'transparent',height:'100',width:'100',paddingTop:'100%'}}>
            <Ionicons
              size={32}
              name="person"
              color={color}
            />
            </ThemedView>
          ),
        }}
      />
    </Tabs>
  );
}
