import React from "react";
import {Text, View} from 'react-native';
import estilos from "../estilos/estilos";

export default function TelaBiblioteca(){

    return(
        <View style={estilos.container}>
            <Text style={estilos.titulo}>
                Qual Biblioteca Usamos?
            </Text>
            <Text style={estilos.texto}>
                Das Bibliotecas que utilizamos podemos destacar duas:
            </Text>
            <Text style={estilos.texto}>
                @react-navigation/native e
            </Text>
            <Text style={estilos.texto}>
                @react-navigation/bottom-tabs.

            </Text>

        </View>

    );
}