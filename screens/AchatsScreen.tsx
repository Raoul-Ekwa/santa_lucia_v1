import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const  AchatsScreen = () => {
  return (
    <View style={styles.root}>
      <Text>Mes Achats</Text>
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

export default AchatsScreen;