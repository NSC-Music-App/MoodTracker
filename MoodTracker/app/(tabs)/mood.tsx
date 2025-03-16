import { StyleSheet, Image, Platform, View, TextInput,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard } from "react-native";
import React from 'react';
import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Pressable, Text } from "react-native";
import { useState } from "react";


export default function MoodScreen() {
    const [text,setText] = useState('')
    const [emoji,setEmoji] = useState('')
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#FFFFFF", dark: "#353636" }}
      headerImage={
        <Image
          source={require("@/assets/images/Earth and Moon-cuate.png")}
          style={{
            marginTop: 70,
            width: 200,
            height: 200,
            alignSelf: "center",
            resizeMode: "contain",
          }}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">How are you today?</ThemedText>
      </ThemedView>
      {/* <IconSymbol size={32} style={{ marginTop: 25 }}/> */}
      <ThemedView
        style={{
          flexDirection: "row", // ให้เรียงแนวนอน
          flexWrap: "wrap", // เมื่อเต็มแถวจะไปแถวใหม่
          justifyContent: "space-between", // จัดให้มีระยะห่างระหว่างไอเทม
          alignItems: "center",
          gap: 15, // ระยะห่างระหว่างปุ่ม
          width: '100%',
        }}
      >
        <Pressable
          onPress={()=>{setEmoji('Happy')}}
          style={{
            width: 70, // ขนาดของวงกลม
            height: 70,
            borderRadius: 35, // ทำให้เป็นวงกลม
            backgroundColor: emoji === 'Happy' ? '#FFD700' : '#f0f0f0', 
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("@/assets/images/emoji/1.png")}
            style={{
              width: 60,
              height: 60,
              alignSelf: "center",
              resizeMode: "contain",
            }}
          />
        </Pressable>

        <Pressable
          onPress={()=>{setEmoji('Relaxed')}}
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: emoji === 'Relaxed' ? '#FFD700' : '#f0f0f0', 
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("@/assets/images/emoji/2.png")}
            style={{
              width: 60,
              height: 60,
              alignSelf: "center",
              resizeMode: "contain",
            }}
          />
        </Pressable>

        <Pressable
          onPress={()=>{setEmoji('Neutral')}}
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: emoji === 'Neutral' ? '#FFD700' : '#f0f0f0', 
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("@/assets/images/emoji/3.png")}
            style={{
              width: 60,
              height: 60,
              alignSelf: "center",
              resizeMode: "contain",
            }}
          />
        </Pressable>

        <Pressable
          onPress={()=>{setEmoji('Sad')}}
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: emoji === 'Sad' ? '#FFD700' : '#f0f0f0', 
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("@/assets/images/emoji/4.png")}
            style={{
              width: 60,
              height: 60,
              alignSelf: "center",
              resizeMode: "contain",
            }}
          />
        </Pressable>

        <Pressable
          onPress={()=>{setEmoji('Angry')}}
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: emoji === 'Angry' ? '#FFD700' : '#f0f0f0', 
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("@/assets/images/emoji/5.png")}
            style={{
              width: 60,
              height: 60,
              alignSelf: "center",
              resizeMode: "contain",
            }}
          />
        </Pressable>

        {/* ปุ่มที่หก */}
        <Pressable
          onPress={()=>{setEmoji('Stressed')}}
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: emoji === 'Stressed' ? '#FFD700' : '#f0f0f0', 
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("@/assets/images/emoji/6.png")}
            style={{
              width: 60,
              height: 60,
              alignSelf: "center",
              resizeMode: "contain",
            }}
          />
        </Pressable>

        {/* ปุ่มที่เจ็ด */}
        <Pressable
          onPress={()=>{setEmoji('Mind-blown')}}
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: emoji === 'Mind-blown' ? '#FFD700' : '#f0f0f0', 
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("@/assets/images/emoji/7.png")}
            style={{
              width: 60,
              height: 60,
              alignSelf: "center",
              resizeMode: "contain",
            }}
          />
        </Pressable>

        {/* ปุ่มที่แปด */}
        <Pressable
          onPress={()=>{setEmoji('Sleepy')}}
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: emoji === 'Sleepy' ? '#FFD700' : '#f0f0f0',
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("@/assets/images/emoji/8.png")}
            style={{
              width: 60,
              height: 60,
              alignSelf: "center",
              resizeMode: "contain",
            }}
          />
        </Pressable>
      </ThemedView>
      <ThemedText style={{fontSize:16, marginTop:10}}>Describe your feelings briefly.</ThemedText>
      <ThemedView>
        <TextInput
          style={{
            width: '100%',
            height: 55,
            borderColor: '#20A4F3',
            borderWidth: 3,
            borderRadius: 20,
            paddingHorizontal: 10,
            fontSize: 16,
            marginBottom: 20,
          }}
          value={text}
          onChangeText={setText} // อัปเดต state เมื่อกรอกข้อความ
          placeholder="Enter your message here..." // ข้อความที่จะแสดงเมื่อยังไม่มีการกรอก
        />
      </ThemedView>
      <ThemedView>
        <Pressable
          style={{
            width: 180,
            height: 55,
            borderRadius: 25,
            backgroundColor: "#20A4F3",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center"
          }}
        >
            <Text style={{color:'white',fontSize:16}}>Generate</Text>
        </Pressable>
      </ThemedView>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
    marginTop: 5,
    marginBottom:5,
    alignSelf: "center",
  },
});
