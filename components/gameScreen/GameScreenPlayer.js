import React, { Component } from 'react'
import { SafeAreaView ,View, Button, TextInput, Text, StyleSheet } from 'react-native'

import * as firebase from 'firebase';
import 'firebase/firestore';

export class GameScreenPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameId: '',
      nickName: ''
    }
    this.JoinGame = this.JoinGame.bind(this)
  }
  JoinGame(){
    // const GameId = new Date().getTime().toString() // Timestamp
    const { nickName } = this.state;
    const { docID, gameTitle } = this.props.route.params;

    firebase.firestore().collection('players')
    .doc(docID)
    .set({
      nickName: nickName,
      docID: docID
    })
    .then((docRef) => {
      this.props.navigation.navigate('GameScreenPLayersCard',{ nickName  : nickName, gameTitle : gameTitle })
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
  }
  render() {
    const { gameTitle } = this.props.route.params;
    return (
      <SafeAreaView style={styles.container} >

        <Text> Salle d'attente </Text>
        <Text> Nom de la partie : { gameTitle }</Text>

        <TextInput
          placeholder="Choix du surnom"
          onChangeText = {(nickName) => this.setState({ nickName })}
        />
         <Button 
          title="Rejoindre la partie"
          onPress={() => this.JoinGame() }
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

export default GameScreenPlayer
