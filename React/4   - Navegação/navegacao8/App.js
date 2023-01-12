import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TelaHome from "./componentes/TelaHome";
import TelaDescricao from "./componentes/TelaDescricao";

const Stack = createStackNavigator();

export default function App(){

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TelaHome}></Stack.Screen>
        <Stack.Screen name="Descrição" component={TelaDescricao}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  );
}