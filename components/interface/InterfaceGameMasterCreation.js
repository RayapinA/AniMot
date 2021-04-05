import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'

import * as firebase from 'firebase';
import 'firebase/firestore';

export class InterfaceGameMasterCreation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameTitle: '',
      playerNumbers: '',
      poachersNumbers: ''
    }
    this.onValidate = this.onValidate.bind(this)
  }
  onValidate(){
    const { gameTitle,playerNumbers,poachersNumbers } = this.state;
    const GameId = new Date().getTime().toString() // Timestamp

    firebase.database().ref('Games/').push({
      gameTitle,
      playerNumbers,
      poachersNumbers
  }).then((data)=>{
      //success callback
      console.log('data ' , data)
  }).catch((error)=>{
      //error callback
      console.log('error ' , error)
  })
    
  //   // Add new game
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
    return (
      <View style={{flex:1,justifyContent:'center', marginTop:10}}>
        <TextInput
          placeholder="Titre de la partie"
          onChangeText = {(gameTitle) => this.setState({ gameTitle })}
        />
        <TextInput
          placeholder="Nombre de joueurs autorisé"
          onChangeText = {(playerNumbers) => this.setState({ playerNumbers })}
        />
        <TextInput
          placeholder="Nombre de braconniers"
          onChangeText = {(poachersNumbers) => this.setState({ poachersNumbers })}
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
