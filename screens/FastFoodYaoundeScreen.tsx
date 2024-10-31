import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const  FastfoodYaoundeScreen = () => {
  return (
    <View style={styles.root}>
      <Text>Fast Food Yaounde</Text>
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

export default FastfoodYaoundeScreen;