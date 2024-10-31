import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const  AideScreen = () => {
  return (
    <View style={styles.root}>
      <Text>Aide</Text>
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
export default AideScreen;