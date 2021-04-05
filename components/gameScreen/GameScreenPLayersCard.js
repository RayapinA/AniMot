import React, { Component } from 'react'
import { SafeAreaView ,View, Button, TextInput, Text, StyleSheet } from 'react-native'


export class GameScreenPLayersCard extends Component {
  render() {
    const { gameTitle, nickName} = this.props.route.params;
    return (
      <View style={styles.container} >
        <Text> Nom de la partie : {gameTitle} </Text>
        <Text> Surnom : {nickName} </Text>
        <Text> Statut : En attente de lancement </Text>
        <Text> Card </Text>
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
