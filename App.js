import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import Router from './src/navigation/Router';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="black" />
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}