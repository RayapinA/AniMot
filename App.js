import { StatusBar } from 'expo-status-bar';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDfOHAMFNUc-jV93jBR_4sZd6rXQwuEDhM",
  authDomain: "ani-mot.firebaseapp.com",
  projectId: "ani-mot",
  storageBucket: "ani-mot.appspot.com",
  messagingSenderId: "426894287799",
  appId: "1:426894287799:web:d24925711dc5091846be32",
  measurementId: "G-QP0PZ0JLGR"
};

if(firebase.apps.length === 0){
  console.log('no is running')
  firebase.initializeApp(firebaseConfig);
}
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './components/Landing'
import InterfaceGameMasterCreation from './components/interface/InterfaceGameMasterCreation'
import InterfacePlayerJoin from './components/interface/InterfacePlayerJoin'

 const Stack = createStackNavigator();
 import React, { Component } from 'react'
 
 export class App extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      loaded : false
    }
  }
  componentDidMount(){

  }
   render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName = "Landing">
          <Stack.Screen name='Landing' component={LandingScreen} options={{headerShown: false}} />
          <Stack.Screen name='InterfaceGameMasterCreation' component={InterfaceGameMasterCreation} options={{headerShown: false}} />
          <Stack.Screen name='InterfacePlayerJoin' component={InterfacePlayerJoin} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    )
   }
 }
 
 export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
