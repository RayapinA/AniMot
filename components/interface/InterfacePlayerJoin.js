import React, { Component } from 'react'
import { View, Button, TextInput,FlatList, Text, StyleSheet, SafeAreaView } from 'react-native'
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

  componentDidMount(){
    
    firebase.database().ref('Games/-MXWvfxeXHvCamizhVmW').on('value', (snapshot) => {
      const data = snapshot.val();
      console.log(Object.keys(data))
      //data.forEach(element => console.log(element))
      console.log(data.gameTitle)
      
    });
    
    
    
    
    // (snapshot) {
    //   const Data = snapshot.val()
    //   Data.forEach(item => {
    //     console.log(item.gameTitle)
    //   })
    // });
    //this.unsubscribe = this.collectionGames.onSnapshot(this.gamesList);
  }

//   gamesList = (gamesSnapShot) =>{ gamesSnapShot
//   const Games = [];
//   // Map GameList
//   gamesSnapShot.forEach((doc) => {
//     let  docID = doc.id
//   const {gameTitle, poachersNumbers, playerNumbers} = doc.data();
//   Games.push({
//       docID,
//       poachersNumbers,
//       playerNumbers,
//       gameTitle
//     });
//   });
//   this.setState({
//     dataSource : Games,
//   });
// }

  render() {
    const {dataSource} = this.state
    
    return (
      <SafeAreaView style={styles.container}>
        {
          dataSource.map((item, i) => (
              <ListItem 
                key={i} bottomDivider
                onPress={() => this.props.navigation.navigate("GameScreenPlayer",{ docID : item.docID, gameTitle: item.gameTitle }) }
              >
                <ListItem.Content>
                  <ListItem.Title>{item.gameTitle}  </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron/>
              </ListItem>
            ))
          }
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   marginTop:50,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default InterfacePlayerJoin
