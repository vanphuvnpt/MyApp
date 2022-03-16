import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import AuthScreen from './screens/user/AuthScreen';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import NavigationContainer from './navigation/NavigationContainer';
import store from './store/store';
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
