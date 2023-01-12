import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Inicio from "./componentes/TelaInicio";
import Carros from "./componentes/TelaCarros";
import Motos from "./componentes/TelaMotos/index.js";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={Inicio}/>
        <Stack.Screen name="Carros" component={Carros}/>
        <Stack.Screen name="Motos" component={Motos}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


