import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from 'src/screens/HomeScreen';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="home" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
