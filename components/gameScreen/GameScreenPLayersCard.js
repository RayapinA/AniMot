import React, { Component } from 'react'
import { SafeAreaView ,View, Button, TextInput, Text, StyleSheet } from 'react-native'

import * as firebase from 'firebase';
import 'firebase/firestore'; 
export class GameScreenPLayersCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animot : "VIDE"
    }
  }

  componentDidMount(){
    const { UserID, gameKey } = this.props.route.params;
    const self = this

    const FirebaseGame = firebase.database().ref('Games/' + gameKey)

    FirebaseGame.on("value", function(snapshot) {
      self.setState({
        status : snapshot.val()['Status'] == "Waiting" ? 'En attente de lancement' : snapshot.val()['Status'],
      });
    });


    const FirebaseUsers = firebase.database().ref('Games/' + gameKey +'/Users/'+ UserID)

    FirebaseUsers.on("value", function(snapshot) {
      self.setState({
        animot : snapshot.val()['AniMot'],
      });
      console.log()
    });
  }

  render() {
    const { gameTitle, nickName} = this.props.route.params;
    const { animot, status } = this.state


    return (
      <View style={styles.container} >
        <Text style={styles.titre} > {gameTitle} </Text>
        <Text style={styles.nickName} > Surnom : {nickName} </Text>
        {
         status != 'OK' &&  <Text style={styles.nickName}> Statut : {status} </Text> 
        }

        {
         animot != '' && <Text style={styles.nickName} > Type de joueur :  {animot} </Text>
        }
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
