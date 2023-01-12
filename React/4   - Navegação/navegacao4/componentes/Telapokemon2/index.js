import React from "react";
import {Text, Image,View} from 'react-native';
import estilos from "../estilos/estilos";
import Squitle from '../../assets/squirtle.png';

export default function TelaPokemon2(){

    return (
        <View style={estilos.container}>
            <Image source={Squitle} style={estilos.Capa} resizeMode={"contain"}></Image>
            <Text style={estilos.titulo}>Squitle</Text>
            <Text style={estilos.descricao}>Pokémon do tipo Água</Text>
        </View>
    );
}