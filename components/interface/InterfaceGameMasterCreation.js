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
    
    
    firebase.firestore().collection('games')
    .doc(new Date().getTime().toString())
    .set({
      gameTitle: gameTitle,
      playerNumbers: playerNumbers,
      poachersNumbers: poachersNumbers
  })
  .then((docRef) => {
      console.log("Document written with ID: ", docRef);
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
  });
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
