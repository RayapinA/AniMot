import React, { Component } from 'react'
import { SafeAreaView, Button, TextInput, Text, StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native'
import { ListItem, Icon } from 'react-native-elements'

import * as firebase from 'firebase';
import 'firebase/firestore';
import { Alert } from 'react-native';

export class GameScreenGameMaster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameTitle: '',
      playerNumbers: '',
      poachersNumbers: '',
      dataSource : [],
      disabled : false,
    }
    this.onValidateGame = this.onValidateGame.bind(this)
  }
  
  componentDidMount(){
    const Users = [];
    const { gameKey, playerNumbers } = this.props.route.params;
    const self = this
    const { playerInGame } = this.state
    const FirebaseUsers = firebase.database().ref('Games/' + gameKey +'/Users')

    FirebaseUsers.orderByKey().on("child_added", function(snapshot) {
      Users.push({
        userID : snapshot.key,
        Pseudo : snapshot.val().Pseudo
      });
      self.setState({
        dataSource : Users,
        playerInGame : Users.length,
      });

      // if(playerNumbers == Users.length){
      //   self.setState({
      //     disabled : false,
      //   });
      // }
    });
  }

  chooseAnimotOrPoacher(){
    const arrayTypePlayer = ['Animot','Poacher']

    let TypePlayer = arrayTypePlayer[Math.round(Math.random())]
    
      return TypePlayer
  }
  getAnimot(aniMot){
    let indexToGet = Math.floor(Math.random() * aniMot.length)

    return aniMot[indexToGet]

  }
  
  attributeAnimotPlayer(){
    const { dataSource } = this.state
    const { gameTitle, playerNumbers, poachersNumbers  } = this.props.route.params;

    let arrayAniMot = ['Chat','Chien','Rat','Hamster','Lapin','Souris','Vache','Mouton','Chevre','Cochon','Cheval','Ane','Poule','Paon','Abeilles','Moustique','Poisson','Requin','Dauphin','Gorille','Dromadaire','Chameau','Ours','Cobra','Elephant','Girafe','Aigle','Lion','Rhinoceros','Hippopotame','Zebre','Guépard','Crocodile','Ornithorynque','Autruche','Caribou','Orque','Baleine','Ours Polaire','Panda','Renard','Loup','Mouette','Perroquet','Lama']
    let nbPoacherAtribute = 0

    const animotNumbers = playerNumbers - poachersNumbers
    var animot = this.getAnimot(arrayAniMot)

    return new Promise((successCallback, failureCallback) => {
      var i = 0;
      var ArrayIndexAnimot = []
      for (; i < animotNumbers; i++) {
        var indexAnimot = Math.floor(Math.random() * dataSource.length)
        if(ArrayIndexAnimot.indexOf(indexAnimot) == -1){
          ArrayIndexAnimot.push(indexAnimot)
        }else{
          i--
        }
      }

    dataSource.forEach(function (item, i){

        if(ArrayIndexAnimot.indexOf(i) == -1){
          nbPoacherAtribute++ 
          item.AniMot = 'Braconnier'
        }
        else {
          item.AniMot = animot
        }
    })
        successCallback("Réussite");
    })
  }

  onValidateGame(){
    const { GameId, gameTitle, gameKey, playerNumbers,newPlayer } = this.props.route.params;
    const { dataSource,playerInGame } = this.state

    if(playerNumbers > playerInGame){
      alert('Il manque '+  parseInt(playerNumbers-playerInGame) +' joueur')
      return false
      }

    this.attributeAnimotPlayer().then(() => {

      dataSource.forEach(element => {
        let Players = firebase.database()
        .ref('/Games/'+ gameKey +'/Users/')
        .child(element.userID);

        Players
        .update({
          AniMot : element.AniMot,
        })
        .then(() => {
          console.log('attributeAnimotPlayer OK')
        });
      });

      const Game = firebase.database()
      .ref('/Games')
      .child( gameKey);

      Game
      .update({
        Status : 'OK',
      })
      .then(() => {
        console.log('Status OK')
      });
      this.props.navigation.navigate("CardGameMaster", { userID : newPlayer, gameID : gameKey,listPlayers: dataSource })
    })
    
  }
  render() {
    const { gameTitle, playerNumbers, poachersNumbers  } = this.props.route.params;
    const { playerInGame, dataSource, disabled } = this.state

    const AppButton = ({ onPress, title, disabled }) => (
      <TouchableOpacity onPress={onPress} style={styles.appButtonContainer} disabled={disabled}>
        <Text style={styles.appButtonText}>{title}</Text>
      </TouchableOpacity>
    );

    return (
      
      <SafeAreaView style={styles.container}>
        <View style={styles.titleCreation}>
          <Text style={styles.titleText}> Attente de joueurs ...  </Text>
          <ScrollView showsVerticalScrollIndicator={false} > 
        {
          dataSource.map((item, i) => (
              <ListItem 
                key={i} bottomDivider
                // onPress={() => this.props.navigation.navigate("GameScreenPlayer",{ docID : item.userID, gameTitle: item.Pseudo }) }
                style={{opacity:0.8,marginBottom:5, marginTop:5}}
              >
                <ListItem.Content>
                  <ListItem.Title style={{fontStyle: 'italic', fontWeight: 'bold', color: 'black',}}> {item.Pseudo} </ListItem.Title>
                </ListItem.Content>
              </ListItem>
            ))
          }
          </ScrollView>
        </View>
        <Text style={styles.titleTextContent}> Nom de la partie : {gameTitle} </Text>
        <Text style={styles.titleTextContent}> Nmbre de joueurs autorisé : {playerInGame} / {playerNumbers} </Text>
        <Text style={styles.titleTextContent}> Nombre de braconniers : {poachersNumbers} </Text>

        <AppButton 
          title="Lancer la partie"
          size="sm"
          disabled={disabled}
          backgroundColor="#1f8416"
          onPress= {() => this.onValidateGame() }
        />
      </SafeAreaView>
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

export default GameScreenGameMaster
