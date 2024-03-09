import React from "react";
import { Text , View} from "react-native";
import estilos from "../estilos/estilos";   

export default function TelaSobre()
{
    return (
        <View style={estilos.container}>
            <Text> Esta é a tela Sobre</Text>
        </View>
    );
}