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
      }
    }
  }
  
  UNSAFE_componentWillMount(){
    const { userID, gameID } = this.props.route.params
    const self = this

    const FirebaseGame = firebase.database().ref('Games/' + gameID)

    FirebaseGame.on("value", function(snapshot) {
      self.setState({
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
    alert('Reload the Game')
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
        this.props.navigation.navigate("Landing", )
      });
  }

  finishGame(){
    const self = this 
    Alert.alert(
      'Terminer la partie',
      'Êtes-vous sur de vouloir terminer la partie ? ',
      [
        {text: 'NON', onPress: () => console.warn('NO Pressed'), style: 'cancel'},
        {text: 'OUI', onPress: () => self.closeGame()},
      ],{ cancelable: true }
    );
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

        <Text style={styles.titleText}> Game is on </Text>
        <Text style={styles.titleTextContent}> Tu es {card.animot} </Text> 
        <Card animot={card.animot} />

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
