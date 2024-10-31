import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const  PromotionsScreen = () => {
  return (
    <View style={styles.root}>
      <Text>Nos Promotions</Text>
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

export default PromotionsScreen;