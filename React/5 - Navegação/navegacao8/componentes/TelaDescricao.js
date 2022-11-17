import React from "react";
import {Text, View } from 'react-native';
import estilos from "./estilos";

export default function TelaDescricao()
{
    return(
        <View style={estilos.container}>
            <Text style={estilos.textoTitulo}>Voltando para a Home</Text>
            <Text style={estilos.texto}>Toque na seta ao lado do titulo da rota para voltar para Home.</Text>
        </View>
    );
}