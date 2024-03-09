import React from "react";
import {View, Text} from 'react-native';
import{FontAwesome} from '@expo/vector-icons';
import estilos from './estilos';

export default function TelaSobre(){
    return(
        <View style={estilos.container}>
            <FontAwesome name="user" size={24} color="black"></FontAwesome>
            <Text style={estilos.titulo}>Tela Sobre</Text>
            <Text style={estilos.descricao}> Segunda tela do APP</Text>
        </View>
    )
}