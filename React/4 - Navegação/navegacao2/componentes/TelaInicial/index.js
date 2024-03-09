import React from "react";
import {Text, View}from "react-native";
import estilos from "../estilos/estilos";

export default function TelaInicial(){
    return(
        <View style={estilos.container}>
            <Text style = {estilos.titulo}>
                Tela Inicial
            </Text>
        </View>

    );

}