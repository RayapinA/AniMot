import React, { Component } from 'react'
import { View, Button, TextInput,FlatList, Text, StyleSheet, SafeAreaView , ScrollView } from 'react-native'
import { ListItem, Icon } from 'react-native-elements'

import * as firebase from 'firebase';
import 'firebase/firestore';
export class InterfacePlayerJoin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource : []
    }
    // Get All Game 
    // TODO : Check if Game is not Finish - Add Parameter in DB 
    // this.collectionGames = firebase.firestore().collection('games')
//     var starCountRef = firebase.database().ref('Games/');
// starCountRef.on('value', (snapshot) => {
//   const data = snapshot.val();
//   // updateStarCount(postElement, data);
// });

// firebase.database().ref('Games/').once('value', function (snapshot) {
//   console.log(snapshot.val())
// });

  }

  UNSAFE_componentWillMount(){
    const Games = [];
    var ref = firebase.database().ref('Games/')
    ref.orderByKey().on("child_added", function(snapshot) {
      const data = snapshot.val();
      if(snapshot.val().Users != undefined){
        console.log(Object.keys(snapshot.val().Users).length)
        console.log(snapshot.val().Users)
      }else{
        console.log('dead')
      }
      
      const playerInDb = 0 //const playerInDb = Object.keys(data.Users).length
      if(playerInDb != undefined && playerInDb < data.playerNumbers){
        console.log('Passage dans la boucle pour recuperer les parties ----------')
        Games.push({
          docID : snapshot.key,
          gameTitle : data.gameTitle
        });
      }
    })
    this.setState({
      dataSource : Games,
    });
  }

  render() {
    const {dataSource} = this.state
    
    return (
      <SafeAreaView style={styles.container}>
        <Text style={ styles.titre}> Liste de parties </Text>
        <ScrollView showsVerticalScrollIndicator={false} > 
        {
          dataSource.map((item, i) => (
              <ListItem 
                key={i} bottomDivider
                onPress={() => this.props.navigation.navigate("GameScreenPlayer",{ docID : item.docID, gameTitle: item.gameTitle }) }
                style={{opacity:0.8,marginBottom:5, marginTop:5}}
              >
                <ListItem.Content>
                  <ListItem.Title style={{fontStyle: 'italic', fontWeight: 'bold', color: 'black',}}> {item.gameTitle} </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron/>
              </ListItem>
            ))
          }
          </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   padding: 16,
   marginTop:50,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  titre : {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0c6904',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 10,
    marginBottom: 20
  }
})

export default InterfacePlayerJoin
