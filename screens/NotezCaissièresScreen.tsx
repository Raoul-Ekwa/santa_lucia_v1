import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const  NotezCaissièresScreen = () => {
  return (
    <View style={styles.root}>
      <Text>Notez Nos Caissières</Text>
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

export default NotezCaissièresScreen;