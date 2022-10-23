import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import Capa from './assets/capa-livro.jpg';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={ styles.imagem} source={Capa}></Image>
      <Text style ={styles.titulo}>Uma Breve História do Tempo</Text>
      <Text style ={styles.descricao}>Marco definitivo da literatura de divulgação ciêntífica, Uma
       breve história do tempo é relançado em edição revista e atualizada.</Text>
       <Text style={styles.citacao}>"Uma Obra Magistral." The Wall Street Journal</Text>
       <Text style={styles.citacao}>"Uma breve história do tempo é a união do estusiasmo de uma criança ao intelecto de um gênio." The Sunday Times</Text>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  imagem:{
    width: 175,
    height: 250,
    marginBottom: 20,
  },
  titulo:{
    fontSize: 22,
    marginBottom:20,
    fontVariant: 20,
  
  },
  descricao: {
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: "center"
    
  },
  citacao:{
    fontStyle: 'italic',
    marginBottom: 10,
    textAlign: "center"
  }
});
