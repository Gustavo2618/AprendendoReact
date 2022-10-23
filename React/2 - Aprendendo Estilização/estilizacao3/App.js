import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import Img from './assets/raposa.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Raposa</Text>
      <Text style={styles.texto}>Mamifero da família Canidea.</Text>
      <Image style={styles.img} source={Img}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    // height: 80,
    flex: 1,
    backgroundColor: '#8FBC8F',
    // backgroundColor:'#004aad' ,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{

    color: '#fff',
    fontSize:22,
  },
  texto:{
    color: '#fff'
  },
  img: {
    marginTop: 20,
    width:150,
    height:200,
   
  }
});
