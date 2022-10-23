import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import Capa from './assets/capa.png';
import splash from './assets/splash.png';
import adaptive from './assets/adaptive-icon.png';

export default function App() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Guerra do Amanhã</Text>
      <Text style={estilos.descricao}>Gêneros: Ação e ficção</Text>

      <Image source={Capa}
      style={estilos.img}></Image>
       <Image source={splash}
      style={estilos.img}></Image>
       <Image source={adaptive}
      style={estilos.img}></Image>
      
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize:22,
  },
  descricao:{
    marginBottom:20,
  },
  img:{ 
    width:300,
    height:300
},
});
