import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TelaHome from './componentes/TelaHome';



const Abas = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Abas.Navigator>
      <Abas.Screen name="Home" component = { TelaHome} />
      
      </Abas.Navigator>
    </NavigationContainer>
  )
};


