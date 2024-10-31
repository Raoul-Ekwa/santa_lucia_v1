import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CarteFidélitéScreen from '@/screens/CarteFidélitéScreen';
import PointsScreen from '@/screens/PointsScreen';
import AchatsScreen from '@/screens/AchatsScreen';


const Tab = createMaterialTopTabNavigator();

export default function MonCompteScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="CarteFidélité" 
        component={CarteFidélitéScreen} 
        options={{ tabBarLabel: 'Ma Carte de Fidélité' }}
      />
      <Tab.Screen 
        name="MesPoints" 
        component={PointsScreen} 
        options={{ tabBarLabel: 'Mes Points' }}
      />
      <Tab.Screen 
        name="MesAchats" 
        component={AchatsScreen} 
        options={{ tabBarLabel: 'Mes Achats' }}
      />
    </Tab.Navigator>
  );
}