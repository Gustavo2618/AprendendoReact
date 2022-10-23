import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
   <View style ={styles.container}>
    <Text style ={styles.titulo}>
      Estilizando o aplicativo
    </Text>
    <Text style={{color: 'white', textAlign: 'center'}}>utilizando estilo inline</Text>
    

   </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rebeccapurple',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  titulo: {
    fontSize: 36,
    color: 'white'
  },
  texto:{
    color: 'white'
  }
});
