import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import{createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TelaContato from './Componentes/TelaContato';
import TelaInicial from './Componentes/TelaInicial';
import TelaSobre from './Componentes/TelaSobre';

const Abas = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Abas.Navigator>
        <Abas.Screen name='Tela inicial' component={TelaInicial}></Abas.Screen>
        <Abas.Screen name='Contato' component={TelaContato}></Abas.Screen>
        <Abas.Screen name='Sobre' component={TelaSobre}></Abas.Screen>
      </Abas.Navigator>
    </NavigationContainer>
  );
}


