import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const  CarteFidelitéScreen = () => {
  return (
    <View style={styles.root}>
      <Text>Carte de Fidelité</Text>
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

export default CarteFidelitéScreen;