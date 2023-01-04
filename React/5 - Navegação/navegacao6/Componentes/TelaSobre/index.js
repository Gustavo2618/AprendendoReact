import React from "react";
import {Text, View} from 'react-native';
import estilos from "../Estilos/estilos";

export default function TelaSobre(){

    return(
        <View style={estilos.container}>
            <Text style={estilos.texto}>
                Tela sobre
            </Text>

        </View>

    );
}