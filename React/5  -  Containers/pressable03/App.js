import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from'@react-navigation/stack';
import TelaInicial from './componentes/TelaInicial';
import TelaPlanetas from './componentes/Planetas';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={TelaInicial}></Stack.Screen>
        <Stack.Screen name='Planetas' component={TelaPlanetas}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

