import React from "react";
import {Image, Text, View} from 'react-native';
import imgreact from '../assets/react.png';
import estilos from "./estilos";

export default function TelaReact()
{
    return(
        <View style={estilos.fundoReact}>
            <View style={estilos.container}>
                <Text style={estilos.titulo}> React
                </Text>
                <Image style={estilos.img} source={imgreact}></Image>
                <Text style={estilos.texto}>React é uma biblioteca JavaScript utilizada no front-end
                para criar a camada visual de uma aplicação web utilizando JavaScript</Text>
            </View>
        </View>
    );
}