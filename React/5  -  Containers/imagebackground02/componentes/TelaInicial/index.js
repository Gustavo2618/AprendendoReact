import React from "react";
import { ImageBackground, View, Text } from "react-native";

import imgraposa from '../../assets/raposa.png';
import imgtoxico from '../../assets/design-toxico.png';
import imgborboleta from '../../assets/aterrissagem.png';
import estilos from "../estilos/estilos";

export default function TelaInicial(){

    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Top Fotografias</Text>
            <Text style={estilos.texto}>Candidatas a prêmio de fotografia da vida selvagem em 2021</Text>
            <ImageBackground source={imgraposa} style={estilos.img}>
                <Text style={estilos.tituloimg}>Raposa da Tempestade</Text>
                <Text style={estilos.textoimg}>Jonny Armstrong</Text>
            </ImageBackground>
            <ImageBackground source={imgborboleta} style={estilos.img}>
                <Text style={estilos.tituloimg}>Aterrissagem de Apolo</Text>
                <Text style={estilos.textoimg}>Emelin Dupiex</Text>
            </ImageBackground>
            <ImageBackground source={imgtoxico} style={estilos.img}>
                <Text style={estilos.tituloimg}>Design Tóxico</Text>
                <Text style={estilos.textoimg}>Gheorghe Popa</Text>
            </ImageBackground>

        </View>
    );
}