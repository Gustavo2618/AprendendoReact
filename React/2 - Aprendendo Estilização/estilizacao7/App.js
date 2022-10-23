import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Lua from './assets/lua.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={Lua}></Image>
      <View style={styles.boxTexto}>
        <Text style={styles.titulo}>Lua</Text>
        <Text style={styles.texto}>A Lua é o satélite natural do <Text style={styles.destaque}>planeta Terra</Text> , distanciados por aproximadamente 384.405km.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    padding: 30,
    alignItems: 'center',
  
  },
  img:{
    width: 100,
    height:100, 
    marginBottom:20,
  },
  boxTexto:{
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 20,
    borderStyle: 'dotted',
    width:300,
    paddingVertical:10,
    paddingHorizontal: 25,
    textDecorationLine: 'underline'
    
  
    
  },
  titulo:{
    color:'#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
    fontSize: 26,
    letterSpacing:10,
    
    
  },
  texto:{
    color: '#fff',
    textAlign:'center'
  }, destaque:{
    fontStyle: 'italic',
    fontWeight: 'bold'

  }
});
