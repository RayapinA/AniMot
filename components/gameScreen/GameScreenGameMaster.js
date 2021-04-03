import React, { Component } from 'react'
import { SafeAreaView, Button, TextInput, Text, StyleSheet } from 'react-native'

export class GameScreenGameMaster extends Component {
  render() {
    return (
      
      <SafeAreaView style={styles.container}>
        <Text> Ecran de jeu Game Masterr  </Text>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50
  },
});

export default GameScreenGameMaster
