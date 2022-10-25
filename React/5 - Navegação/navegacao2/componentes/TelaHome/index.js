import React from "react";
import {Text, View} from 'react-native';
import estilos from "../estilos/estilos";


export default function TelaHome(){
    return(
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Como navegar?</Text>
            <Text style={estilos.texo}>Toque nas abas abaixo para navegar entre as telas.</Text>
        </View>
    );
}