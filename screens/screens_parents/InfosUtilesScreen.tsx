import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PharmacieScreen from '@/screens/PharmacieScreen';
import NumUtilesScreen from '@/screens/NumUtilesScreen';
import UrgenceScreen from '@/screens/UrgenceScreen';

const Tab = createMaterialTopTabNavigator();

export default function InfosUtilesScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="PharmaciesDeGarde" 
        component={PharmacieScreen} 
        options={{ tabBarLabel: 'Pharmacies De Garde' }}
      />
      <Tab.Screen 
        name="NumérosUtiles" 
        component={NumUtilesScreen} 
        options={{ tabBarLabel: 'Numéros Utiles' }}
      />
      <Tab.Screen 
        name="ServicesUrgence" 
        component={UrgenceScreen} 
        options={{ tabBarLabel: "Services d'Urgence" }}
      />
    </Tab.Navigator>
  );
}