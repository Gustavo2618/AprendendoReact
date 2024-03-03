import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import TelaInicial from './componentes/TelaInicial';
import TelaJogos from './componentes/TelaJogos';
import TelaConsoles from './componentes/TelaConsoles';
import TelaNuvem from './componentes/TelaNuvem';

const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component={TelaInicial}></Stack.Screen>
        <Stack.Screen name = "Consoles" component={TelaConsoles}></Stack.Screen>
        <Stack.Screen name = "Jogos" component={ TelaJogos}></Stack.Screen>
        <Stack.Screen name = "Nuvem" component={ TelaNuvem}></Stack.Screen>

      </Stack.Navigator>
   </NavigationContainer>
  );
}

