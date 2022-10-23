import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App(){
  return (

    <View style = {estilos.container}>
      <Text style = {estilos.texto}>Mofi a exibir uma imagem</Text>
      <Image style = {estilos.img} source ={{uri: 'https://www.devmedia.com.br/favicon.png'}}></Image>
      <Text>Logo da DevMedia</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container:{
    flex: 1, 
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent: 'center',
  },
  texto:{
    fontSize:22,
  },
  img:{
    marginTop: 20,
    marginBottom:10,
    width:200,
    height:200,


  }



});

