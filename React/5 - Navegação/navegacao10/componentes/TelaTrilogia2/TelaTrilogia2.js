import React from "react";
import {View, Image, Text} from 'react-native';
import estilos from "../Estilos/styles";
import imagem from '../../assets/lucas-skywalker.jpg';

export default function TelaTrilogia2()
{
    return(
     <View style={estilos.container}>
        <View style={estilos.boxDescricao}>
            <Text style={estilos.titulo}>A História de Luke Skaywalker</Text>
            <Image source={imagem} style={estilos.imagem}></Image>
            <Text style={estilos.textos}>Trilogia original. Episódios IV, V e VI</Text>
            <Text style={estilos.textos}>Essa foi a primeira trilogia a surgir porém sua história se passa após a trilogia prequel</Text>
            <Text style={estilos.textos}>Nela Luke Skywalker se aventura pela galáxia para atender a um pedido de socorro da princesa Leia e entra em conflito com o grande vilão Darth Vader.</Text>

        </View>
     </View>
    );
}