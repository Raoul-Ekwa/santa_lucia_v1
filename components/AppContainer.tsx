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
import 'react-native-gesture-handler';
import { Entypo, FontAwesome, Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importons vos écrans ici
import AchatsScreen from '@/screens/AchatsScreen';
import ActualitesScreen from '@/screens/ActualitesScreen';
import PromotionsScreen from '@/screens/PromotionsScreen';
import PatisserieScreen from '@/screens/PatisserieScreen';
import LocalisationsScreen from '@/screens/LocalisationsScreen';
import ContactezNousScreen from '@/screens/ContactezNousScreen';
import NotezCaissièresScreen from '@/screens/NotezCaissièresScreen';
import AideScreen from '@/screens/AideScreen';
import FastFoodDoualaScreen from '@/screens/FastFoodDoualaScreen';
import FastFoodYaoundeScreen from '@/screens/FastFoodYaoundeScreen';
import HotelDoualaScreen from '@/screens/HotelDoualaScreen';
import HotelYaoundeScreen from '@/screens/HotelYaoundeScreen';
import PharmacieScreen from '@/screens/PharmacieScreen';
import NumUtilesScreen from '@/screens/NumUtilesScreen';
import UrgenceScreen from '@/screens/UrgenceScreen';
import CarteFidélitéScreen from '@/screens/CarteFidélitéScreen';
import PointsScreen from '@/screens/PointsScreen';




const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', gap:130, backgroundColor:'#DE3163', paddingTop:10}}>
        <Text style={{color:'white', fontSize:16, fontWeight:'bold'}}>Complexe Santa Lucia</Text>
        <Image style={{ width: 100, height:65 }} 
               source={require("../assets/images/logo_santaLucia.png")} //Pour logo de l'app
        />
      </View>
      
      <NavigationContainer independent={true}>
        <DrawerNavigation />
      </NavigationContainer> 
    </>
  );
}

// Pour reduire l'ecart entre nos label et leurs icones dans le Drawer
const DrawerItem = ({ icon, label }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    {icon}
    <Text style={{ marginLeft: 10 }}>{label}</Text>
  </View>
);

// Navigation par tiroir ou Drawer Navigation
function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen 
        name='Actualités' 
        component={ActualitesScreen} 
        options={{
          drawerLabel: () => (
            <DrawerItem 
              icon={<AntDesign name="home" size={24} color="black" />} 
              label="Actualités" 
            /> //label et icon respectent les regles fixees plus haut 
          )
        }} 
      />
      
      <Drawer.Screen 
        name='Nos Promotions' 
        component={PromotionsScreen} 
        options={{
          drawerLabel: () => (
            <DrawerItem 
              icon={<Ionicons name="pricetag-outline" size={24} color="black" />} 
              label="Nos Promotions" 
            />
          )
        }} 
      />
      
      <Drawer.Screen 
        name='Notre Pâtisserie' 
        component={PatisserieScreen} 
        options={{
          drawerLabel: () => (
            <DrawerItem 
              icon={<FontAwesome name="birthday-cake" size={24} color="black" />} 
              label="Notre Pâtisserie" 
            />
          )
        }} 
      />
      
      <Drawer.Screen 
        name='Fast Food Douala' 
        component={FastFoodDoualaScreen} 
        options={{
          drawerLabel: () => (
            <DrawerItem 
              icon={<Ionicons name="fast-food-outline" size={24} color="black" />} 
              label="Fast Food Douala" 
            />
          )
        }} 
      />
      
      <Drawer.Screen 
        name='Fast Food Yaounde' 
        component={FastFoodYaoundeScreen} 
        options={{
          drawerLabel: () => (
            <DrawerItem 
              icon={<Ionicons name="fast-food-outline" size={24} color="black" />} 
              label="Fast Food Yaounde" 
            />
          )
        }} 
      />
      
      <Drawer.Screen 
        name='Hotel Douala' 
        component={HotelDoualaScreen} 
        options={{
          drawerLabel: () => (
            <DrawerItem 
              icon={<FontAwesome name="hotel" size={24} color="black" />} 
              label="Hotel Douala" 
            />
          )
        }} 
      />
      
      <Drawer.Screen 
        name='Hotel Yaounde' 
        component={HotelYaoundeScreen} 
        options={{
          drawerLabel: () => (
            <DrawerItem 
              icon={<FontAwesome name="hotel" size={24} color="black" />} 
              label="Hotel Yaounde" 
            />
          )
        }} 
      />
      
      <Drawer.Screen 
        name='Pharmacie De Garde' 
        component={PharmacieScreen} 
        options={{
          drawerLabel: () => (
            <DrawerItem 
              icon={<MaterialIcons name="local-pharmacy" size={24} color="black" />} 
              label="Pharmacie De Garde" 
            />
          )
        }} 
      />
      
      <Drawer.Screen 
        name='Numéros Utiles' 
        component={NumUtilesScreen} 
        options={{
          drawerLabel: () => (
            <DrawerItem 
              icon={<FontAwesome name="phone-square" size={24} color="black" />} 
              label="Numéros Utiles" 
            />
          )
        }} 
      />
      
      <Drawer.Screen 
        name="Services d'Urgence" 
        component={UrgenceScreen} 
        options={{
          drawerLabel: () => (
            <DrawerItem 
              icon={<MaterialCommunityIcons name="car-emergency" size={24} color="black" />} 
              label="Services d'Urgence" 
            />
          )
        }} 
      />
      
      <Drawer.Screen 
        name='Nos Localisations' 
        component={LocalisationsScreen} 
        options={{
          drawerLabel: () => (
            <DrawerItem 
              icon={<Entypo name="location" size={24} color="black" />} 
              label="Nos Localisations" 
            />
          )
        }} 
      />
      
      <Drawer.Screen 
        name='Ma Carte de Fidélité' 
        component={CarteFidélitéScreen} 
        options={{
          drawerLabel: () => (
            <DrawerItem 
              icon={<Ionicons name="card-outline" size={24} color="black" />} 
              label="Ma Carte de Fidélité" 
            />
          )
        }} 
      />
      
      <Drawer.Screen 
        name='Mes Points' 
        component={PointsScreen} 
        options={{
          drawerLabel: () => (
            <DrawerItem 
              icon={<Ionicons name="star-outline" size={24} color="black" />} 
              label="Mes Points" 
            />
          )
        }} 
      />
      
      <Drawer.Screen 
        name='Mes Achats' 
        component={AchatsScreen} 
        options={{
          drawerLabel: () => (
            <DrawerItem 
              icon={<Ionicons name="cart-outline" size={24} color="black" />} 
              label="Mes Achats" 
            />
          )
        }} 
      />
      
      <Drawer.Screen 
        name='Contactez-Nous' 
        component={ContactezNousScreen} 
        options={{
          drawerLabel: () => (
            <DrawerItem 
              icon={<Ionicons name="call-outline" size={24} color="black" />} 
              label="Contactez-Nous" 
            />
          )
        }} 
      />
      
      <Drawer.Screen 
        name='Notez nos Caissières' 
        component={NotezCaissièresScreen} 
        options={{
          drawerLabel: () => (
            <DrawerItem 
              icon={<Ionicons name="create-outline" size={24} color="black" />} 
              label="Notez nos Caissières" 
            />
          )
        }} 
      />
      
      <Drawer.Screen 
        name='Aide' 
        component={AideScreen} 
        options={{
          drawerLabel: () => (
            <DrawerItem 
              icon={<Entypo name="help-with-circle" size={24} color="black" />} 
              label="Aide" 
            />
          )
        }} 
      />
    </Drawer.Navigator>
    

  );
}
