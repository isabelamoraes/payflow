import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import { useFonts } from 'expo-font';
import { StatusBar } from 'react-native';
import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { Lexend_400Regular, Lexend_600SemiBold } from '@expo-google-fonts/lexend';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';
import * as ScreenOrientation from 'expo-screen-orientation';

import { AuthProvider } from './src/hooks/auth';

import theme from './src/styles/theme';

import { Routes } from './src/routes';

export default function App() {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Lexend_400Regular,
    Lexend_600SemiBold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}