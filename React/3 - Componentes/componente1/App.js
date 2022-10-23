import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import logo from './assets/logo.png';


export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.img}></Image>
      <Text style={styles.paragrafo}>Windows 11 foi anunciado em 24 de junho de 2021, e desenvolvido pela Microsoft. É o sucessor do Windows 10, lançado seis anos antes.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b6d4ed',
    alignItems: 'center',
    justifyContent: 'center',
    padding:8,
  },
  img:{
   width:300, height: 50,
  },
  paragrafo:{
    marginTop:24,
    fontSize:16,
    fontWeight:'bold',
    textAlign: 'center'
  }
});
