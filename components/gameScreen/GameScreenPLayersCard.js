import React, { Component } from 'react'
import { SafeAreaView ,View, Button, TextInput, Text, StyleSheet } from 'react-native'


export class GameScreenPLayersCard extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Text> Card Screen </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50
  },
});

export default GameScreenPLayersCard
