import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TelaHome from './componentes/TelaHome';
import TelaBiblioteca from './componentes/TelaBiblioteca';
import TelaDescrição from './componentes/TelaDescrição';
import TelaRotas from './componentes/TelaRotas';
import TelaInicial from './componentes/TelaInicial';
import TelaPerfil from './componentes/TelaPerfil';

const Abas = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Abas.Navigator>
      <Abas.Screen name="Home" component = { TelaHome} />
      <Abas.Screen name="Descrição" component={TelaDescrição}/>
      <Abas.Screen name="Rotas" component={TelaRotas}/>
      <Abas.Screen name="Biblioteca" component={TelaBiblioteca} />
      <Abas.Screen name="Tela Inicial" component={TelaInicial}/>
      <Abas.Screen name ="Tela Perfil" component={TelaPerfil}/>
      
      
      
      </Abas.Navigator>
    </NavigationContainer>
  )
};


