import React, { Component } from 'react'
import { View, Button, TextInput, Text } from 'react-native'

import * as firebase from 'firebase';
import 'firebase/firestore';

export class InterfaceGameMasterCreation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameTitle: '',
      playerNumbers: '',
      poachersNumbers: '',
      GameID : '',
      Pseudo : ''
    }
    this.onValidate = this.onValidate.bind(this)
  }
  onValidate(){
    const { gameTitle,playerNumbers,poachersNumbers,Pseudo } = this.state;
    const GameId = new Date().getTime().toString() // Timestamp

    const newGame = firebase.database()
    .ref('/Games')
    .push();

    newGame
    .set({
      gameTitle:gameTitle,
      playerNumbers: playerNumbers,
      poachersNumbers : poachersNumbers
    })
    .then(() => {
      console.log('Game Created.', newGame.key )

      const newPlayer = firebase.database()
      .ref('/Games/'+ newGame.key +'/Users')
      .push();

      newPlayer
      .set({
        Pseudo : Pseudo,
        Role : "Admin",
      })
      .then(() => {
        console.log('Player Created.', newPlayer.key )
        //TODO Faire passer les key pour recuperer les informations user et partie. 
        this.props.navigation.navigate('GameScreenGameMaster',
        { GameId  : GameId,
          gameTitle : gameTitle,
          poachersNumbers: poachersNumbers,
          playerNumbers: playerNumbers,
          gameKey : newGame.key,
          newPlayer : newPlayer.key
        })
      });
    });
  }

  render() {
    const { GameID } = this.state;
    return (
      <View style={{flex:1,justifyContent:'center', marginTop:10}}>
        <TextInput
          placeholder="Titre de la partie"
          onChangeText = {(gameTitle) => this.setState({ gameTitle })}
        />
        <TextInput
          placeholder="Nombre de joueurs autorisé"
          onChangeText = {(playerNumbers) => this.setState({ playerNumbers })}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Nombre de braconniers"
          onChangeText = {(poachersNumbers) => this.setState({ poachersNumbers })}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Votre Pseudo"
          onChangeText = {(Pseudo) => this.setState({ Pseudo })}
        />
        <Button 
          title="Valider la partie"
          onPress={() => this.onValidate() }
        />
      </View>
    )
  }
}


export default InterfaceGameMasterCreation
