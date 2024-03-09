import React from "react";
import {View, Text, Image} from 'react-native';

import estilos from "../estilos/estilos";
import bulbasaur from '../../assets/bulbasaur.png';

export default function TelaPokemon1(){

    return (
        <View style={estilos.container}>
            <Image source={bulbasaur} style={estilos.Capa} resizeMode={"contain"}></Image>
            <Text style={estilos.titulo}>Bulbasaur</Text>
            <Text style={estilos.descricao}>Pokémon tipo Planta e Venenoso</Text>
        </View>
    );
}