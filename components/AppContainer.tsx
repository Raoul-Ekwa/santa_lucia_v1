/*import * as React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <View style={styles.headerLogo}>
      <Text style={{ color: 'white', fontSize: 20 }}>Complexe Santa Lucia</Text>
      <Image
        style={{ width: 100, height: 55 }}
        source={require('@/assets/images/logo_santaLucia.png')} // Assurez-vous que ce chemin est correct
      />
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Page d'acceuil</Text>
    </View>
  );
}

function AppContainer() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
            headerStyle: {
              backgroundColor: '#DE3163',
            },
            headerTintColor: '#fff', // Correction ici, '#' manquait pour le code couleur
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerLogo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 100,
  },
});

export default AppContainer;*/

import React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Importez vos écrans ici
import AchatsScreen from '@/screens/AchatsScreen';
import ActualitesScreen from '@/screens/ActualitesScreen';
import PromotionsScreen from '@/screens/PromotionsScreen';
import PatisserieScreen from '@/screens/PatisserieScreen';
import FastFoodDoualaScreen from '@/screens/FastFoodDoualaScreen';
import FastFoodYaoundeScreen from '@/screens/FastFoodYaoundeScreen';
import HotelDoualaScreen from '@/screens/HotelDoualaScreen';
import HotelYaoundeScreen from '@/screens/HotelYaoundeScreen';
import PharmacieScreen from '@/screens/PharmacieScreen';
import NumUtilesScreen from '@/screens/NumUtilesScreen';
import UrgenceScreen from '@/screens/UrgenceScreen';
import LocalisationsScreen from '@/screens/LocalisationsScreen';
import CarteFidélitéScreen from '@/screens/CarteFidélitéScreen';
import PointsScreen from '@/screens/PointsScreen';
import ContactezNousScreen from '@/screens/ContactezNousScreen';
import NotezCaissièresScreen from '@/screens/NotezCaissièresScreen';
import AideScreen from '@/screens/AideScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
    <View style={{flexDirection:'row', alignItems:'center',justifyContent:'center', gap:150,backgroundColor:'#DE3163', paddingTop:10}}>
      <Text style={{color:'white'}}>Complexe Santa  Lucia</Text>
      <Image style={{ width: 100, height:65}} 
            source={require("../assets/images/logo_santaLucia.png")}
      />
    </View>
    <NavigationContainer independent={true} style={{backgroundColor:'#DE3163'}}>
      <DrawerNavigation />
    </NavigationContainer>
    
    </>
    
  );
}

function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Actualités' component={ActualitesScreen} />
      <Drawer.Screen name='Nos Promotions' component={PromotionsScreen} />
      <Drawer.Screen name='Notre Pâtisserie' component={PatisserieScreen} />
      <Drawer.Screen name='Fast Food Douala' component={FastFoodDoualaScreen} />
      <Drawer.Screen name='Fast Food Yaounde' component={FastFoodYaoundeScreen} />
      <Drawer.Screen name='Hotel Douala' component={HotelDoualaScreen} />
      <Drawer.Screen name='Hotel Yaounde' component={HotelYaoundeScreen} />
      <Drawer.Screen name='Pharmacie De Garde' component={PharmacieScreen} />
      <Drawer.Screen name='Numéros Utiles' component={NumUtilesScreen} />
      <Drawer.Screen name="Services d'Urgence" component={UrgenceScreen} />
      <Drawer.Screen name='Nos Localisations' component={LocalisationsScreen} />
      <Drawer.Screen name='Ma Carte de Fidélité' component={CarteFidélitéScreen} />
      <Drawer.Screen name='Mes Points' component={PointsScreen} />
      <Drawer.Screen name='Mes Achats' component={AchatsScreen} />
      <Drawer.Screen name='Contactez-Nous' component={ContactezNousScreen} />
      <Drawer.Screen name='Notez nos Caissières' component={NotezCaissièresScreen} />
      <Drawer.Screen name='Aide' component={AideScreen} />
    </Drawer.Navigator>
  );
}
