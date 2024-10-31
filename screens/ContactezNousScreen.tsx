import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const  ConctatezNousScreen = () => {
  return (
    <View style={styles.root}>
      <Text>Contactez-nous</Text>
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
export default ConctatezNousScreen;