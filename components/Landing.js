import React from 'react'
import { Text,View, Button, StyleSheet, TouchableOpacity } from 'react-native'

export default function Landing({navigation}) {

  const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
  
  return (
    <View style={styles.container}>
      <Text style={styles.titre} > Ani'mot</Text>
      <View style={styles.viewButton} >
        <AppButton 
          title="Créer une partie"
          size="sm" 
          backgroundColor="#1f8416"
          onPress= {() => navigation.navigate('InterfaceGameMasterCreation')}
        />
        <AppButton 
          title="Rejoindre une partie"
          size="sm" 
          backgroundColor="#1f8416"
          onPress= {() => navigation.navigate('InterfacePlayerJoin')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop:100
  },
  viewButton : {
    flex: 1,
    justifyContent:'center',
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
  },titre : {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0c6904',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 10
  }
});
