import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import Visuelllll from '../../assets/AniMoSplashScreen.png'
import bearVisuel from '../../assets/bear.png'
import dragonVisuel from '../../assets/dragon.png'
import eagleVisuel from '../../assets/eagle.png'
import horseVisuel from '../../assets/horse.png'
import snakeVisuel from '../../assets/snake.png'



export class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visuelAnimot : ''
    }
  }
  
  UNSAFE_componentWillMount(){

    if(this.props.animot == 'bear'){
      this.setState({
        visuelAnimot : bearVisuel,
      });
    }
    if(this.props.animot == 'dragon'){
      this.setState({
        visuelAnimot : dragonVisuel,
      });
    }
    if(this.props.animot == 'eagle'){
      this.setState({
        visuelAnimot : eagleVisuel,
      });
    }
    if(this.props.animot == 'horse'){
      this.setState({
        visuelAnimot : horseVisuel,
      });
    }
    if(this.props.animot == 'snake'){
      this.setState({
        visuelAnimot : snakeVisuel,
      });
    }
    if(this.props.animot == 'Poacher'){
      this.setState({
        visuelAnimot : Visuelllll,
      });
    }
  }

  render() {
    const { visuelAnimot } = this.state
    return (
      <View style={styles.container}>
        <View 
            style={styles.viewImgVisuel}
            >
          <Image
            source={visuelAnimot} 
            style={styles.imgVisuel}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  
  container: {
    padding: 16
  },
  imgVisuel : {
    width: 200,
    height: 200,
    
  },
  viewImgVisuel : {
    marginTop: 15,
    marginBottom:15,
    justifyContent: 'center',
    alignItems: 'center',
  }

})

export default Card
