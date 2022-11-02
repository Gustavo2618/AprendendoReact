import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TelaInicial from './Componentes/TelaInicial';



const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Tela Inicial' component ={TelaInicial}></Drawer.Screen>

      </Drawer.Navigator>
    </NavigationContainer>
 
  );
}

