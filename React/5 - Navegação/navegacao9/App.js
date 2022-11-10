import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import TelaReact from "./componentes/TelaReact";
import TelaNode from "./componentes/TelaNode";
import TelaJavaScript from "./componentes/TelaJavaScript";

const Stack = createStackNavigator();

export default function App(){

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="JavaScript" component={TelaJavaScript}></Stack.Screen>
        <Stack.Screen name="Node.js" component={TelaNode}></Stack.Screen>
        <Stack.Screen name="React" component={TelaReact}></Stack.Screen>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}