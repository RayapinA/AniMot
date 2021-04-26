import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import Visuelllll from '../../assets/AniMoSplashScreen.png'
import bearVisuel from '../../assets/bear.png'
import dragonVisuel from '../../assets/dragon.png'
import eagleVisuel from '../../assets/eagle.png'
import horseVisuel from '../../assets/horse.png'
import snakeVisuel from '../../assets/snake.png'

import dogVisuel from '../../assets/animaux/animotDog.png'
import catVisuel from '../../assets/animaux/animotCat.png'
import ratVisuel from '../../assets/animaux/animotRat.png'
import hamsterVisuel from '../../assets/animaux/animotHamster.png'
import lapinVisuel from '../../assets/animaux/animotLapin.png'
import moutonVisuel from '../../assets/animaux/animotMouton.png'
import chevreVisuel from '../../assets/animaux/animotChevre.png'
import cochonVisuel from '../../assets/animaux/animotCochon.png'
import chevalVisuel from '../../assets/animaux/animotCheval.png'
import aneVisuel from '../../assets/animaux/animotAne.png'
import pouleVisuel from '../../assets/animaux/animotPoule.png'
import paonVisuel from '../../assets/animaux/animotPaon.png'
import abeilleVisuel from '../../assets/animaux/animotAbeille.png'
import moustiqueVisuel from '../../assets/animaux/animotMoustique.png'
import poissonVisuel from '../../assets/animaux/animotPoisson.png'
import requinVisuel from '../../assets/animaux/animotRequin.png'
import dauphinVisuel from '../../assets/animaux/animotDauphin.png'
import gorilleVisuel from '../../assets/animaux/animotGorille.png'
import dromadaireVisuel from '../../assets/animaux/animotDromadaire.png'
import chameauVisuel from '../../assets/animaux/animotChameau.png'
import oursVisuel from '../../assets/animaux/animotOurs.png'
import cobraVisuel from '../../assets/animaux/animotCobra.png'

import elephantVisuel from '../../assets/animaux/animotElephant.png'
import giraffeVisuel from '../../assets/animaux/animotGiraffe.png'
import aigleVisuel from '../../assets/animaux/animotAigle.png'
import lionVisuel from '../../assets/animaux/animotLion.png'
import rhinocerosVisuel from '../../assets/animaux/animotRhinoceros.png'
import hippopotameVisuel from '../../assets/animaux/animotHippopotame.png'
import zebreVisuel from '../../assets/animaux/animotZebre.png'

import guepardVisuel from '../../assets/animaux/animotGuepard.png'
import crocodileVisuel from '../../assets/animaux/animotCrocodile.png'
import ornithorynqueVisuel from '../../assets/animaux/animotOrnithorynque.png'

import autrucheVisuel from '../../assets/animaux/animotAutruche.png'
import caribouVisuel from '../../assets/animaux/animotCaribou.png'
import orqueVisuel from '../../assets/animaux/animotOrque.png'
import baleineVisuel from '../../assets/animaux/animotBaleine.png'

import oursPolaireVisuel from '../../assets/animaux/animotOursPolaire.png'
import pandaVisuel from '../../assets/animaux/animotPanda.png'
import renardVisuel from '../../assets/animaux/animotRenard.png'
import loupVisuel from '../../assets/animaux/animotLoup.png'
import mouetteVisuel from '../../assets/animaux/animotMouette.png'
import perroquetVisuel from '../../assets/animaux/animotPerroquet.png'
import lamaVisuel from '../../assets/animaux/animotLama.png'
import vacheVisuel from '../../assets/animaux/animotVache.png'
import CountDown from 'react-native-countdown-component';



export class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visuelAnimot : '',
      showCountDown : true
    }
  }
  
  UNSAFE_componentWillMount(){

    if(this.props.animot.toLowerCase() == 'chien'){
      this.setState({
        visuelAnimot : dogVisuel,
      });
    }
    if(this.props.animot.toLowerCase() == 'chat'){
      this.setState({
        visuelAnimot : catVisuel,
      });
    }
    if(this.props.animot.toLowerCase() == 'rat'){
      this.setState({
        visuelAnimot : ratVisuel,
      });
    }
    if(this.props.animot.toLowerCase() == 'hamster'){
      this.setState({
        visuelAnimot : hamsterVisuel,
      });
    }
    if(this.props.animot.toLowerCase() == 'lapin'){
      this.setState({
        visuelAnimot : lapinVisuel,
      });
    }
    if(this.props.animot.toLowerCase() == 'souris'){
      this.setState({
        visuelAnimot : ratVisuel,
      });
    }
    if(this.props.animot.toLowerCase() == 'vache'){
      this.setState({
        visuelAnimot : vacheVisuel,
      });
    }
    if(this.props.animot.toLowerCase() == 'mouton'){
      this.setState({
        visuelAnimot : moutonVisuel,
      });
    }
    if(this.props.animot.toLowerCase() == 'chevre'){
      this.setState({
        visuelAnimot : chevreVisuel,
      });
    }
    if(this.props.animot.toLowerCase() == 'cochon'){
      this.setState({
        visuelAnimot : cochonVisuel,
      });
    }
    if(this.props.animot.toLowerCase() == 'cheval'){
      this.setState({
        visuelAnimot : chevalVisuel,
      });
    }
    if(this.props.animot.toLowerCase() == 'ane'){
      this.setState({
        visuelAnimot : aneVisuel,
      });
    }
    if(this.props.animot.toLowerCase() == 'poule'){
      this.setState({
        visuelAnimot : pouleVisuel,
      });
    }
    if(this.props.animot.toLowerCase() == 'paon'){
      this.setState({
        visuelAnimot : paonVisuel,
      });
    }
    if(this.props.animot.toLowerCase() == 'abeilles'){
      this.setState({
        visuelAnimot : abeilleVisuel,
      });
    }
    if(this.props.animot.toLowerCase() == 'moustique'){
      this.setState({
        visuelAnimot : moustiqueVisuel,
      });
    }
    if(this.props.animot.toLowerCase() == 'poisson'){
      this.setState({
        visuelAnimot : poissonVisuel,
      });
    }
    if(this.props.animot.toLowerCase() == 'requin'){
      this.setState({
        visuelAnimot : requinVisuel,
      });
    }
    if(this.props.animot.toLowerCase() == 'dauphin'){
      this.setState({
        visuelAnimot : dauphinVisuel,
      });
    }
    if(this.props.animot.toLowerCase() == 'gorille'){
      this.setState({
        visuelAnimot : gorilleVisuel,
      });
    }
    if(this.props.animot.toLowerCase() == 'dromadaire'){
      this.setState({
        visuelAnimot : dromadaireVisuel,
      });
    }
    if(this.props.animot.toLowerCase() == 'chameau'){
      this.setState({
        visuelAnimot : chameauVisuel,
      });
    }
    if(this.props.animot.toLowerCase() == 'ours'){
      this.setState({
        visuelAnimot : oursVisuel,
      });
    }
    if(this.props.animot.toLowerCase() == 'cobra'){
      this.setState({
        visuelAnimot : cobraVisuel,
      });
    }
    if(this.props.animot.toLowerCase() == 'elephant'){
      this.setState({
        visuelAnimot : elephantVisuel,
      });
    }
    if(this.props.animot.toLowerCase() == 'girafe'){
      this.setState({
        visuelAnimot : giraffeVisuel,
      });
    }
    if(this.props.animot.toLowerCase() == 'aigle'){
      this.setState({
        visuelAnimot : aigleVisuel,
      });
    }
    if(this.props.animot.toLowerCase() == 'lion'){
      this.setState({
        visuelAnimot : lionVisuel,
      });
    }
    if(this.props.animot.toLowerCase() == 'rhinoceros'){
      this.setState({
        visuelAnimot : rhinocerosVisuel,
      });
    }
    if(this.props.animot.toLowerCase() == 'hippopotame'){
      this.setState({
        visuelAnimot : hippopotameVisuel,
      });
    }
    if(this.props.animot.toLowerCase() == 'zebre'){
      this.setState({
        visuelAnimot : zebreVisuel,
      });
    }
    if(this.props.animot.toLowerCase() == 'guepard'){
      this.setState({
        visuelAnimot : guepardVisuel,
      });
    }
    if(this.props.animot.toLowerCase() == 'crocodile'){
      this.setState({
        visuelAnimot : crocodileVisuel,
      });
    }
    if(this.props.animot.toLowerCase() == 'ornithorynque'){
      this.setState({
        visuelAnimot : ornithorynqueVisuel,
      });
    }
    if(this.props.animot.toLowerCase() == 'autruche'){
      this.setState({
        visuelAnimot : autrucheVisuel,
      });
    }
    if(this.props.animot.toLowerCase() == 'caribou'){
      this.setState({
        visuelAnimot : caribouVisuel,
      });
    }
    if(this.props.animot.toLowerCase() == 'orque'){
      this.setState({
        visuelAnimot : orqueVisuel,
      });
    }
    if(this.props.animot.toLowerCase() == 'baleine'){
      this.setState({
        visuelAnimot : baleineVisuel,
      });
    }
    if(this.props.animot.toLowerCase() == 'ours polaire'){
      this.setState({
        visuelAnimot : oursPolaireVisuel,
      });
    }
    if(this.props.animot.toLowerCase() == 'panda'){
      this.setState({
        visuelAnimot : pandaVisuel,
      });
    }
    if(this.props.animot.toLowerCase() == 'renard'){
      this.setState({
        visuelAnimot : renardVisuel,
      });
    }
    if(this.props.animot.toLowerCase() == 'loup'){
      this.setState({
        visuelAnimot : loupVisuel,
      });
    }
    if(this.props.animot.toLowerCase() == 'mouette'){
      this.setState({
        visuelAnimot : mouetteVisuel,
      });
    }
    if(this.props.animot.toLowerCase() == 'perroquet'){
      this.setState({
        visuelAnimot : perroquetVisuel,
      });
    }
    if(this.props.animot.toLowerCase() == 'lama'){
      this.setState({
        visuelAnimot : lamaVisuel,
      });
    }

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
  }
  CountDownFinish(){
    this.setState({
      showCountDown : false,
    });
  }

  render() {
    const { visuelAnimot,showCountDown } = this.state
    return (
      <View style={styles.container}>
        { showCountDown == false && 
          <View 
              style={styles.viewImgVisuel}
              >
        <Text style={styles.titleTextContent}> Tu es {this.props.animot} </Text> 

            { this.props.animot != 'Braconnier' && 
              <Image
              source={visuelAnimot} 
              style={styles.imgVisuel}
            />
            }
          </View>
        }
        { showCountDown == true && 
          <View 
              style={styles.viewImgVisuel}
              >
            <CountDown
              size={50}
              // Pour avoir un seul chiffre modifier ligne 171 par cette ligne {this.renderDigit(digits.toString().substr(1,1))}
              until={5}
              onFinish={() => this.CountDownFinish()}
              digitStyle={{backgroundColor: '#11ffee00'}}
              digitTxtStyle={{color: '#1f8416'}}
              timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
              separatorStyle={{color: '#1CC625'}}
              timeToShow={['S']}
              timeLabels={{ s: null}}
              showSeparator
            />
          </View>
        }
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
    marginTop:40
    
  },
  viewImgVisuel : {
    marginTop: 15,
    marginBottom:15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleTextContent : {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0c6904',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 10,
    marginTop : 8,
    marginBottom : 8
  }

})

export default Card
