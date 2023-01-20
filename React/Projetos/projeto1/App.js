import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import TelaInicial from "./componentes/TelaInicial";
import TelaRestaurante from "./componentes/TelaRestaurantes"
import TelaHospedagem from './componentes/TelaHospedagem';
import TelaPasseio from './componentes/TelaPasseios' 

const Stack = createStackNavigator();

export default function App()
{
  return(
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name = "Tela Inicial" component={TelaInicial}></Stack.Screen>
      <Stack.Screen name="TelaHospedagem" component={TelaHospedagem}></Stack.Screen>
      <Stack.Screen name ="TelaPasseio" component={TelaPasseio}></Stack.Screen>
      <Stack.Screen name ="TelaRestaurante" component={TelaRestaurante}></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
  )
}