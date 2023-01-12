import react from 'react';
import {View ,StyleSheet} from 'react-native';

import BarraTitulo from './componentes/BarraTitulo';
import Card from './componentes/Card';
import Conteudo from './componentes/Conteudo';
import estilos from './estilos';

export default function App() {
  return (
    <View style={estilos.container}>
      <BarraTitulo></BarraTitulo>
      <Card></Card>
      <Conteudo></Conteudo>
    </View>
  );
}



