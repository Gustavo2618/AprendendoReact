import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Topo from './componentes/Topo';
import Conteudo  from './componentes/Conteudo';


export default function App() {
  return (
    <View style={styles.container}>

      <Topo></Topo>
      <Conteudo></Conteudo>
    </View>
  
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
