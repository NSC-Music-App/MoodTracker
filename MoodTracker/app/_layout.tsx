import React, { useEffect } from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'; // ใช้ PaperProvider
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Stack } from 'expo-router'; // ใช้ Stack จาก expo-router

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  // Hide splash screen once fonts are loaded
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null; // Show splash screen until fonts are loaded
  }

  return (
    <PaperProvider theme={DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        {/* หน้า login แต่แค่ชื่อ Index */}
        <Stack.Screen name="RegisterScreen" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> {/* หน้าหลักที่มีแท็บ */}
        <Stack.Screen name="+not-found" /> {/* หน้าสำหรับกรณีที่ไม่พบหน้า */}
      </Stack>
      <StatusBar style="auto" />
    </PaperProvider>
  );
};

export default RootLayout;
