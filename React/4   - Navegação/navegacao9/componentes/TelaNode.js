import React from "react";
import {Text, Image, View} from 'react-native';
import estilos from "./estilos";
import imgnode from '../assets/node.png';

export default function TelaNode()
{
    return(
        <View style={estilos.fundoNode}>
             <View style={estilos.container}>
            <Text style={estilos.titulo}>NodeJS</Text>
            <Image source={imgnode} style={estilos.img}></Image>
            <Text style={estilos.texto}> Node.js é uma ferramenta que permite rodar JavaScript no Servidor.
             Com isso você poderá criar o seu Back-end utilizando a linguagem JavaScript</Text>
        </View>
        </View>
       
    );
}