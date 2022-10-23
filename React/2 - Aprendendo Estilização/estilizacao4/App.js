import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Img from './assets/bart-img.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Os Simpsons</Text>
      <Image style={styles.img} source={Img}></Image>
      <Text style={styles.texto}>Bart o Filho Mais Velho</Text>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#feda0a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    color: '#000',
    fontSize: 32,
    marginBottom: 20,
  },
  texto:{
    color:'#000',
    marginBottom: 20,
    fontSize:20,
  },
  img:{
    height:150,
    width:150,
    marginBottom:10,
    borderRadius: 75,
    borderColor: '#198',
    borderWidth:2,
  }
});
