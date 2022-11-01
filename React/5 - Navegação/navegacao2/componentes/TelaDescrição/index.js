import React from "react";
import {Text, View} from "react-native";
import estilos from "../estilos/estilos";

export default function TelaDescrição(){
    return(
        <View style={estilos.container}>
            <Text style={estilos.titulo}>
                Nome das telas
            </Text>
            <Text style={estilos.texto}>
                Perceba que cada aba representa uma tela do aplicativo
            </Text>


        </View>

    );

}