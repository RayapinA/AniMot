import React from 'react'
import { Text,View, Button } from 'react-native'

export default function Landing({navigation}) {
  
  return (
    <View style={{flex:1,justifyContent:'center'}}>
      <Button 
        title="Créer une partie"
        onPress= {() => navigation.navigate('InterfaceGameMasterCreation')}
      /> 
      {/* TODO check if game.length > 0  */}
      <Button 
        title="Rejoindre une partie"
        onPress= {() => navigation.navigate('InterfacePlayerJoin')}
      /> 
    </View>
  )
}
