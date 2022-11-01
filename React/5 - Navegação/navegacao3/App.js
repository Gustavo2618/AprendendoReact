import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TelaCoresInvertidas from './componentes/TelaCoresInvertidas';
import TelaCoresNormais from './componentes/TelaCoresNormais';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Cores Invertidas" component={TelaCoresInvertidas}/>
        <Drawer.Screen name="Cores Normais" component={TelaCoresNormais}/>

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

