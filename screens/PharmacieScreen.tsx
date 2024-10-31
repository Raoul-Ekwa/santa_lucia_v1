import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const  PharmacieScreen = () => {
  return (
    <View style={styles.root}>
      <Text>Pharmacie de Garde</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    root:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
    }
})

export default PharmacieScreen;