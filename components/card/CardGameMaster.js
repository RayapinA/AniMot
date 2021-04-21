import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet, Alert } from 'react-native'

import * as firebase from 'firebase';
import 'firebase/firestore'; 
import Card from './Card'


export class CardGameMaster extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource : [],
      disabled : false,
      card: {
        animot:''
      },
      gameTitle:'',
      playerNumbers:0,
      poachersNumbers:0
    }
  }
  
  UNSAFE_componentWillMount(){
    const { userID, gameID } = this.props.route.params
    const self = this
    const FirebaseGame = firebase.database().ref('Games/' + gameID)
    FirebaseGame.on("value", function(snapshot) {
      self.setState({
        gameTitle:snapshot.val()['gameTitle'],
        playerNumbers:snapshot.val()['playerNumbers'],
        poachersNumbers:snapshot.val()['poachersNumbers']
      });
    });
    const FirebaseUsers = firebase.database().ref('Games/' + gameID +'/Users/'+ userID)
    FirebaseUsers.on("value", function(snapshot) {
      self.setState({
        card : { animot : snapshot.val()['AniMot'] }
      });
    });
  }
  reloadTheGame(){
    const { userID, gameID } = this.props.route.params;
    const self = this 
    Alert.alert(
      'Relancer la partie',
      'Êtes-vous sur de vouloir relancer une partie ?',
      [
        {text: 'NON', onPress: () => console.log('Fausse manipulation - reloadTheGame')},
        {text: 'OUI', onPress: () => self.relauchGame()},
      ],
      { cancelable: true }
    );
    // this.props.navigation.navigate("GameScreenGameMaster")
  }

  relauchGame(){
    const { userID, gameID, listPlayers } = this.props.route.params;
    const { gameTitle, playerNumbers, poachersNumbers } = this.state
    console.log('relauchGame')
    console.log(gameTitle)
    console.log(playerNumbers)
    console.log(poachersNumbers)

    listPlayers.forEach(element => {
      console.log(element['userID'])
      let Players = firebase.database()
      .ref('/Games/'+ gameID +'/Users/')
      .child(element['userID']);

      Players
      .update({
        AniMot : '',
      })
      .then(() => {
        this.props.navigation.navigate("GameScreenGameMaster", { gameTitle:gameTitle, playerNumbers:playerNumbers, poachersNumbers:poachersNumbers, gameKey:gameID })
      });
    });
    
  }

  finishGame(){
    const self = this 
    Alert.alert(
      'Terminer la partie',
      'Êtes-vous sur de vouloir terminer la partie ? ',
      [
        {text: 'NON', onPress: () => console.log('Fausse manipulation - closeGame')},
        {text: 'OUI', onPress: () => self.closeGame()},
      ],
      { cancelable: true }
    );
  }

  closeGame(){
    const { userID, gameID } = this.props.route.params;
    const Game = firebase.database()
    .ref('/Games')
    .child( gameID);

    Game
    .update({
      Status : 'ENDED',
    })
    .then(() => {
      this.props.navigation.navigate("Landing")
    });
  }

  getStyleTextInfoAnimot(animot){
    if(animot == 'braconnier'){
      return { marginTop: 55, marginBottom: 55 };
    }
    return { marginTop: 35, marginBottom: 35}
  }

  render() {

    const { card } = this.state
    const AppButton = ({ onPress, title }) => (
      <TouchableOpacity onPress={onPress} style={styles.appButtonContainer} >
        <Text style={styles.appButtonText}>{title}</Text>
      </TouchableOpacity>
    );

    return (
      <View style={styles.container}>

        <Text style={styles.titleText}> Jeu en cours </Text>
        <Text style={[styles.titleTextContent, this.getStyleTextInfoAnimot(card.animot)]}> Tu es {card.animot} </Text> 
        {
         card.animot != 'braconnier' &&  <Card animot={card.animot} />
        }
        <AppButton 
          title="Terminer la partie"
          size="sm"
          backgroundColor="#1f8416"
          onPress= {() => this.finishGame() }
        />
        <AppButton 
          title="Relancer la partie"
          size="sm"
          backgroundColor="#1f8416"
          onPress= {() => this.reloadTheGame() }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop:50
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
  titleTextContent : {
    fontSize: 20,
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
  }
});

export default CardGameMaster
