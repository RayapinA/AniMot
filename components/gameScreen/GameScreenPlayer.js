import React, { Component } from 'react'
import { SafeAreaView ,View, Button, TextInput, Text, StyleSheet } from 'react-native'

export class GameScreenPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameId: '',
      nickName: ''
    }
    this.JoinGame = this.JoinGame.bind(this)
  }
  JoinGame(){
    const { nickName } = this.state;
    console.log(nickName)
    // TODO : Add player in game with GameId - Check InterfaceGameMasterCreation
  }
  render() {
    return (
      <SafeAreaView style={styles.container} >
        <Text> Salle d'attente  -  Choix du surnom</Text>
        <TextInput
          placeholder="Choix du surnom"
          onChangeText = {(nickName) => this.setState({ nickName })}
        />
         <Button 
          title="Rejoindre la partie"
          onPress={() => this.JoinGame() }
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50
  },
});

export default GameScreenPlayer
