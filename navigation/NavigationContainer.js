import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from '../screens/user/AuthScreen';
import HomeScreen from '../screens/home/HomeScreen';
const Stack = createNativeStackNavigator();

const NavigationContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen nam="Login" component={AuthScreen} />
        <Stack.Screen nam="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationContainer;
