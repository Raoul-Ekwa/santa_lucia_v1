import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const  LocalisationsScreen = () => {
  return (
    <View style={styles.root}>
      <Text>Nos Localisations</Text>
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

export default LocalisationsScreen;