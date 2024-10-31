import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HotelDoualaScreen from '@/screens/HotelDoualaScreen';
import HotelYaoundeScreen from '@/screens/HotelYaoundeScreen';

const Tab = createMaterialTopTabNavigator();

export default function HotelsScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="HotelDouala" 
        component={HotelDoualaScreen} 
        options={{ tabBarLabel: 'Douala' }}
      />
      <Tab.Screen 
        name="HotelYaounde" 
        component={HotelYaoundeScreen} 
        options={{ tabBarLabel: 'Yaoundé' }}
      />
    </Tab.Navigator>
  );
}