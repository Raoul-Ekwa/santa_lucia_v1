import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FastFoodDoualaScreen from '@/screens/FastFoodDoualaScreen';
import FastFoodYaoundeScreen from '@/screens/FastFoodYaoundeScreen';

const Tab = createMaterialTopTabNavigator();

export default function FastFoodScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Douala" component={FastFoodDoualaScreen} />
      <Tab.Screen name="Yaoundé" component={FastFoodYaoundeScreen} />
    </Tab.Navigator>
  );
}