import { React } from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';
import Pool from './assets/download.jpeg';
import fotoPerfil from './assets/perfil.jpeg';

export default function App() {
  return (
    <View style={estilos.container}>
       <Image style={estilos.fotoTopo}></Image>

      <View style={ estilos.boxDescricao}>
      <Image style={estilos.fotoPerfil} source={fotoPerfil}></Image>
      <Text style={estilos.titulo}>Luiz Gustavo Gomes Monteiro</Text>
      <Text style ={estilos.cargo }>Gosto muito de natação. Gosto de jogos de estratégia e de RPG como o final fantasy tatics</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  fotoTopo:{
    flex:1,
    backgroundColor:'#45a',
    alignItems:'stretch'
  },
  boxDescricao:{
    flex:1,
    alignItems: 'center',
  },  
  fotoPerfil:{
    width:100,
    height:100,
    marginBottom:20,
    marginTop:20,
    borderRadius:50
  },
  titulo:{
    marginBottom:20,
    fontSize:22,
  },
  cargo: {
    textAlign: 'center',
    marginHorizontal:15,
    fontSize:16
  }
});
