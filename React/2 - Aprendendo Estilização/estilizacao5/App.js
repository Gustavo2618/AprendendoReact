import React from 'react';
import { StyleSheet, Text, View, Image,  } from 'react-native';

import MobileImg from './assets/mobile-img.png';
import BackendImg from './assets/backend-img.png';
import FullStackImg from './assets/fullstack-img.png';

export default function App() {
  return (
    <View style={styles.container}>
     <View style={styles.card}>
      <Text style={styles.titulo}>Mobile Developer</Text>
      <Text style={styles.texto}>Michonne Hawthrone</Text>
      <Image style={styles.img} source={MobileImg}></Image>
     </View>
     <View style={styles.card}>
      <Text style={styles.titulo}>BackEnding Developer</Text>
      <Text style={styles.texto}>Elijah Price | Mr Glass</Text>
      <Image style = {styles.img} source={BackendImg}></Image>
     </View>
     <View style={styles.card}>
        <Text style={styles.titulo}>FullStack Developer</Text>
        <Text style={styles.texto}>Chuck Norris</Text>
        <Image style={styles.img} source={FullStackImg}></Image>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbe9f8',
    alignItems: 'center',
    justifyContent: 'center',
  },

  card:{
    backgroundColor:'#5450d6',
    width: 300, 
    borderRadius: 20,
    borderWidth: 2, 
    borderColor: '#2d1f76',
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginBottom: 20, 
  },
  titulo:{

    color:'#fff',
    fontSize: 18,
  },
  texto:{
    colors: '#a7abff',
    marginBottom: 10,
  },
  img:{
    width:50,
    height:50,
    borderRadius: 75,
    borderColor:'#fff',
    borderTopWidth: 2,
  }

});
