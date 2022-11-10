import React from "react";
import {Button, Text, View} from 'react-native';
import estilos from "./estilos";

export default function TelaHome(props)
{
    return(

        <View style={estilos.container}>

            <Text style={estilos.textoTitulo}>Stack Navigation</Text>
            <Text style={ estilos.texto}> Toque no botão abaixo para navegar para a rota descrição.</Text>
            <Button title="Tela Descrição" onPress={() => props.navigation.navigate('Descrição')}></Button>
        </View>


    );
}