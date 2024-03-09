import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from'@react-navigation/stack';
import TelaInicial from './componentes/TelaInicial';
import TelaPlanetas from './componentes/Planetas';
import TelaGalaxias from './componentes/Galaxias';
import TelaBuracoNegro from './componentes/BuracoNegro';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={TelaInicial}></Stack.Screen>
        <Stack.Screen name='Planetas' component={TelaPlanetas}></Stack.Screen>
        <Stack.Screen name='Galaxias' component={TelaGalaxias}></Stack.Screen>
        <Stack.Screen name='BuracoNegro' component={TelaBuracoNegro}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

