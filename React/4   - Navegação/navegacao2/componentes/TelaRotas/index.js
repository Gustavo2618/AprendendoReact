import React from "react";
import {Text, View} from "react-native";

import estilos from "../estilos/estilos";

export default function TelaRotas()
{
    return(
        <View style={estilos.container}>
            <Text style={estilos.titulo}>
                O que é uma rota?
                
            </Text>
            <Text style={estilos.texto}> Rota é a associação entre um componente e o caminho até ele</Text>



        </View>


    );
}