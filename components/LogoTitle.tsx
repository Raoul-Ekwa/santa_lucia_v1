import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


function LogoTitle() {
    return (
      <>
      <View style={styles.headerLogo}>
        <Text style={{color:'blue', fontSize:20}}> Complexe Santa Lucia</Text>
        <Image
        style={{ width: 100, height: 55 }}
        source={require('../assets/images/logo_santaLucia.png')}
      />
      </View>
  
      </>
      
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

  export default LogoTitle;