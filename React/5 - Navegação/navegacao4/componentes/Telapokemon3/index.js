import React from "react";
import {Text, View, Image} from 'react-native';
import estilos from "../estilos/estilos";
import Charmander from '../../assets/charmander.png';

export default function TelaPokemon3(){

    return(
        <View style={estilos.container}>
            <Image source={Charmander} style={estilos.Capa} resizeMode={'contain'}></Image>
            <Text style={estilos.titulo}>Charmander</Text>
            <Text style={estilos.descricao}>Pokémon Tipo Fogo</Text>


        </View>

    );
}