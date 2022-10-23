import React from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';

import Congo from './assets/floresta-congo.png';
import Taiga from './assets/floresta-taiga.png';
import Amazonica from './assets/floresta-amazonica.png';

export default function App() {
  return (
    <View style={estilos.container}>

      <Text style={estilos.titulos}>Florestas Pelo Mundo!</Text>
      <Image source={Congo} style={estilos.img}></Image>
      <Text style={estilos.margem}>Floresta Do Congo(África)</Text>
      <Image source={Taiga} style={estilos.img}></Image>
      <Text style={estilos.margem}>Floresta (Hemisfério Norte)</Text>
      <Image style={estilos.img} source={Amazonica}></Image>
      <Text style={estilos.margem}> Floresta Amazônica( América Do Sul)</Text>
    
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulos:{
    fontSize:20,
    marginBottom:30,
  },
  

  img:{
    width:300,
    height:150,
  },
  margem:{
    
    marginBottom:30
  }
});
