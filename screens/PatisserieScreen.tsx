import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const  PatisserieScreen = () => {
  return (
    <View style={styles.root}>
      <Text>Notre Pâtisserie</Text>
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

export default PatisserieScreen;