import React, { Component } from 'react'
import { SafeAreaView, Button, TextInput, Text, StyleSheet } from 'react-native'

export class GameScreenGameMaster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameTitle: '',
      playerNumbers: '',
      poachersNumbers: ''
    }
    this.onValidateGame = this.onValidateGame.bind(this)
  }
  onValidateGame(){
    const { GameId, gameTitle } = this.props.route.params;
    
    console.log(GameId)
    console.log(gameTitle)
    // console.log(GameId)
    // console.log(GameId)
    // console.log(GameId)
    // Add new game
  //   firebase.firestore().collection('games')
  //   .doc(GameId)
  //   .set({
  //     gameTitle: gameTitle,
  //     playerNumbers: playerNumbers,
  //     poachersNumbers: poachersNumbers
  // })
  // .then((docRef) => {
  //   // Redirection to screen Master
  //   this.props.navigation.navigate('GameScreenGameMaster',{ GameId  : GameId, gameTitle : gameTitle, poachersNumbers: poachersNumbers, playerNumbers: playerNumbers })
  // })
  // .catch((error) => {
  //     console.error("Error adding document: ", error);
  // });
  }
  render() {
    const { gameTitle, playerNumbers, poachersNumbers  } = this.props.route.params;
    return (
      
      <SafeAreaView style={styles.container}>
        <Text> Ecran de jeu Game Masterr  </Text>
        <Text> Nom de la partie : {gameTitle} </Text>
        <Text> Nmbre de joueurs autorisé : 0 / {playerNumbers} </Text>
        <Text> Nombre de braconniers : {poachersNumbers} </Text>

        <Button 
          title="Valider la partie"
          onPress={() => this.onValidateGame() }
        />
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
