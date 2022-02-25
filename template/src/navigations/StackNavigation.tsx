import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import BottomNavigation from './BottomNavigation';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="bottom"
      >
        <Stack.Screen name="bottom" component={BottomNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
