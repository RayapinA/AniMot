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
    this.collectionGames = firebase.firestore().collection('games')
  }

  componentDidMount(){
    this.unsubscribe = this.collectionGames.onSnapshot(this.gamesList);
  }

  gamesList = (gamesSnapShot) =>{ gamesSnapShot
  const Games = [];
  gamesSnapShot.forEach((doc) => {
  const {gameTitle, poachersNumbers, playerNumbers} = doc.data();
  console.log(gameTitle)
  Games.push({
      poachersNumbers,
      playerNumbers,
      gameTitle
    });
  });
  this.setState({
    dataSource : Games,
  });
}

  render() {
    const {dataSource} = this.state
    
    return (
      <SafeAreaView style={styles.container}>
        {
          dataSource.map((item, i) => (
              <ListItem 
                key={i} bottomDivider
                onPress={() => this.props.navigation.navigate("GameScreenPlayer") }
              >
                <ListItem.Content>
                  <ListItem.Title>{item.gameTitle}</ListItem.Title>
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
