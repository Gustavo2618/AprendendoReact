import React from "react";
import {Text, View, Button} from 'react-native';
import estilos from "./estilos";

export default function TelaSobre(props)
{
    return(
        <View style={estilos.container}>
            <Text style ={estilos.textoTitulo}>Tela no botão abaixo para abrir o menu Lateral</Text>

            <View style={estilos.buttonBox}>
                <Button title="Tela Inicial" onPress={()=> props.navigation.navigate('Tela inicial')}>

                </Button>
            </View>
        </View>

    );
}