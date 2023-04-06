import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import imgTerra from '../../assets/fundo.png';
import estilos from '../estilos/estilos';

export default function TelaInicial(){
    return (
        <ImageBackground style={estilos.container} source={imgTerra} blurRadius={1} resizeMode='cover'>
            <View style={estilos.card}>
                <Text style={estilos.titulo}>Planeta Terra</Text>
                <Text style={estilos.paragrafo}>Nosso planeta é um dos oito que estão no Sistema Solar orbitando em torno de uma estrela central: o Sol.</Text>
                <Text style={estilos.paragrafo}>Essa órbita permite o desenvolvimento da vida devido à temperatura que chega até nós, o que chamamos de radiação solar.</Text>
            </View>
        </ImageBackground>
        
    );
}