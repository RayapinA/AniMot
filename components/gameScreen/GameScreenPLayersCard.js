import React, { Component } from 'react'
import { SafeAreaView ,View, Button, TextInput, Text, StyleSheet } from 'react-native'


export class GameScreenPLayersCard extends Component {
  render() {
    const { gameTitle, nickName} = this.props.route.params;
    return (
      <View style={styles.container} >
        <Text style={styles.titre} > {gameTitle} </Text>
        <Text style={styles.nickName} > Surnom : {nickName} </Text>
        <Text> Statut : En attente de lancement </Text>
        <Text> Card </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:16,
    marginTop:50
  },
  titre : {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0c6904',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 10,
    marginBottom: 20
  },
  nickName : {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0c6904',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 10,
    marginBottom: 20
  }
});

export default GameScreenPLayersCard
