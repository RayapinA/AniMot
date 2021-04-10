import React, { Component } from 'react'
import { SafeAreaView, Button, TextInput, Text, StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native'
import { ListItem, Icon } from 'react-native-elements'

import * as firebase from 'firebase';
import 'firebase/firestore';

export class GameScreenGameMaster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameTitle: '',
      playerNumbers: '',
      poachersNumbers: '',
      dataSource : [],
      disabled : true
    }
    this.onValidateGame = this.onValidateGame.bind(this)
  }
  
  componentDidMount(){
    const Users = [];
    const { gameKey } = this.props.route.params;
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
    });
  }
  

  onValidateGame(){
    const { GameId, gameTitle, gameKey, playerNumbers } = this.props.route.params;

    const Game = firebase.database()
      .ref('/Games')
      .child( gameKey);

      Game
      .update({
        Status : 'OK',
      })
      .then(() => {
        console.log('VALIDER LA PARTIE')
      });
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
          title="Valider la partie"
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
