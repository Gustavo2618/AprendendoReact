import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from './componentes/TelaInicial';
import TelaSobre from './componentes/TelaSobre/estilos';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='TelaInicial' component={TelaInicial}></Stack.Screen>
        <Stack.Screen name='Sobre' component={TelaSobre}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


