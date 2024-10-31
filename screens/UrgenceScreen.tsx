import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const  UrgenceScreen = () => {
  return (
    <View style={styles.root}>
      <Text>Services d'Urgence</Text>
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

export default UrgenceScreen;