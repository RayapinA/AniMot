import React, { Component } from 'react'
import { SafeAreaView ,View, Button, TextInput, Text, StyleSheet,TouchableOpacity } from 'react-native'

import * as firebase from 'firebase';
import 'firebase/firestore';

export class GameScreenPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameId: '',
      nickName: '',
    }
    this.JoinGame = this.JoinGame.bind(this)
  }
  JoinGame(){
    // const GameId = new Date().getTime().toString() // Timestamp
    const { nickName } = this.state;
    const { docID, gameTitle } = this.props.route.params;
    var playersIn = 0
    var playersAutorise = 0

    var ref = firebase.database().ref('Games/'+ docID +'/Users')
    ref.orderByKey().on("child_added", function(snapshot) {
      const data = snapshot.val();
      playersIn = Object.keys(data).length
      // console.log(playersIn)
      // playersIn = Object.keys(snapshot.val().Users).length
      // playersAutorise = snapshot.val().playerNumbers
    })
   
    console.log('playerInDb',playersIn)
    console.log('playerNumbers',playersAutorise)

    if(playersIn >= playersAutorise){
      console.log('here')
      this.props.navigation.navigate('Landing')
    }
    const newPlayer = firebase.database()
      .ref('/Games/'+ docID +'/Users')
      .push();

      newPlayer
      .set({
        Pseudo : nickName,
        Role : "Players",
      })
      .then(() => {
        console.log('Player Created.', newPlayer.key )

        this.props.navigation.navigate('GameScreenPLayersCard',{ nickName  : nickName, gameTitle : gameTitle })

      });
  }
  render() {
    const { gameTitle, docID } = this.props.route.params;

    const AppButton = ({ onPress, title }) => (
      <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
      </TouchableOpacity>
    );
    return (
      <SafeAreaView style={styles.container} >

        <Text style={styles.titre}> Salle d'inscription  </Text>
        <Text> Nom de la partie : { gameTitle }</Text>

        <TextInput
        style= {styles.textInput}
          placeholder="Choix du surnom"
          onChangeText = {(nickName) => this.setState({ nickName })}
        />

        <AppButton 
          title="Rejoindre la partie"
          size="sm" 
          backgroundColor="#1f8416"
          onPress= {() => this.JoinGame()}
        />
      </SafeAreaView>
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
  viewButton : {
    flex: 1,
    justifyContent:'center',
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

export default GameScreenPlayer
