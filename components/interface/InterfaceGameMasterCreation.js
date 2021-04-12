import React, { Component } from 'react'
import { View, Button, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native'

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
      Pseudo : '',
      ValidateButton: true
    }
    this.onValidate = this.onValidate.bind(this)
  }
  onValidate(){
    const { gameTitle,playerNumbers,poachersNumbers,Pseudo } = this.state;
    const GameId = new Date().getTime().toString() // Timestamp

    if(!this.checkInput(gameTitle, Pseudo)){
      alert('Vérifier les données Titre de la partie')
      return false
    }

    if(!this.checkNbPlayersAndPoachers(playerNumbers, poachersNumbers)){
      alert('Vérifier les données Joueur')
      return false
    }
    
    const newGame = firebase.database()
    .ref('/Games')
    .push();

    newGame
    .set({
      gameTitle:gameTitle,
      playerNumbers: playerNumbers,
      poachersNumbers : poachersNumbers,
      Status: 'Waiting'
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
        AniMot : ''
      })
      .then(() => {
        console.log('Player Created.', newPlayer.key )

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

  checkInput(gameTitle,Pseudo){
    if(gameTitle.length == 0 & Pseudo.length == 0){
      return false;
    }
    return true;
  }
  checkNbPlayersAndPoachers(playerNumbers,poachersNumbers){

    if((playerNumbers.length == 0 || poachersNumbers.length == 0) || (playerNumbers < poachersNumbers)){
      return false;
    }
    return true;
  }

  render() {
    const { GameID } = this.state;

    const AppButton = ({ onPress, title }) => (
      <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
      </TouchableOpacity>
    );
    return (
      <View style={styles.container}>
        <View style={styles.titleCreation}>
        <Text style={styles.titleText}> Création de la partie </Text>
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Titre de la partie"
          onChangeText = {(gameTitle) => this.setState({ gameTitle })}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Nombre de joueurs autorisé"
          onChangeText = {(playerNumbers) => this.setState({ playerNumbers })}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Nombre de braconniers"
          onChangeText = {(poachersNumbers) => this.setState({ poachersNumbers })}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Votre Pseudo"
          onChangeText = {(Pseudo) => this.setState({ Pseudo })}
        />
        <AppButton 
          title="Valider la partie"
          size="sm" 
          backgroundColor="#1f8416"
          onPress= {() => this.onValidate() }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    marginTop:10,
    padding: 16,
    
  },
  titleCreation: {
    marginBottom: 30,
  },
  titleText : {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0c6904',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 10,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#0c6904",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop:20
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  textInput: {
    elevation: 3,
    height:70,
    paddingLeft:15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
  }
});

export default InterfaceGameMasterCreation
