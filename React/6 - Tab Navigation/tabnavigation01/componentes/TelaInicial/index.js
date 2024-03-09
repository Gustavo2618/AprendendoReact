import React from "react";
import {View, Text} from 'react-native';
import {Entypo, FontAwesome} from '@expo/vector-icons';

import estilos from './estilos';

export default function TelaInicial(){
    return(
        <View style={estilos.container}>
            <Entypo name="home" size={24} color='black' ></Entypo>
            <Text style={estilos.titulo}>Tela Inicial</Text>
            <Text style={estilos.descricao}>Primeira a tela do app</Text>
        </View>
    )
}