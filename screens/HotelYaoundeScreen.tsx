import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const  HotelYaoundeScreen = () => {
  return (
    <View style={styles.root}>
      <Text>Hotel Yaounde</Text>
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

export default HotelYaoundeScreen;