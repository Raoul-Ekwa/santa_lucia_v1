import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NumUtilesScreen = () => {
  return (
    <View style={styles.root}>
      <Text>Numeros Utiles</Text>
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

export default NumUtilesScreen;