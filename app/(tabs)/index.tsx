import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function LogoTitle() {
  return (
    <>
    <View style={styles.headerLogo}>
      <Text style={{color:'white', fontSize:20}}>Santa Lucia</Text>
      <Image
      style={{ width: 100, height: 55 }}
      source={require('../../assets/images/logo_santaLucia.png')}
    />
    </View>

    </>
    
  );
}

const Stack = createNativeStackNavigator();

function App() {
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
            headerTintColor: '#fff',
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
    gap: 100
  }
})



export default App;
