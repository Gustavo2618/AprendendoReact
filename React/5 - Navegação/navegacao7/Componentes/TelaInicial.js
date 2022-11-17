import React from "react";
import {Button, Text, View}from 'react-native';
import estilos from "./estilos";

export default function TelaInicial(props)
{
    return(
        <View style={estilos.container}>
            <Text style={estilos.textoTitulo}>Tela Inicial</Text>

            <Text style={estilos.texto}>Toque nos Botões abaixo para navegar pelas Rotas do aplicativo</Text>

            <View style={estilos.buttonBox}>
                <Button title="Tela Contato" onPress={()=> props.navigation.navigate('Contato')}></Button>
            </View>
            <View style={estilos.buttonBox}>
                <Button title="Tela Sobre" onPress={()=> props.navigation.navigate('Sobre')}> </Button>
            </View>
        </View>
    );
}