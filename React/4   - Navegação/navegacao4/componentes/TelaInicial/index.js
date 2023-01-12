
import React from "react";
import {Image, Text, View} from "react-native";
import estilos from "../estilos/estilos";
import Capa from '../../assets/capa.png';



export default function TelaInicial(){

    return(
        <View style={estilos.container}>
            <Image style={estilos.Capa} source={Capa}></Image>
            <Text style={estilos.titulo}>Conhecendo os 3 pokemons Inicias da primeira temporada.</Text>
            <Text style={estilos.descricao}>Arraste o dedo da esquerda para direita para abrir o menu Lateral.</Text>

        </View>
    );
}