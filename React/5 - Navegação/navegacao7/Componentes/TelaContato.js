import React from "react";
import {View,Text,Button} from 'react-native';
import estilos from "./estilos";

export default function TelaContato(props)
{
    return(
        <View style={estilos.container}>

            <Text style={estilos.textoTitulo}>
                Tela de Contato
            </Text>
            <View style={estilos.buttonBox}>

                <Button title="Tela Inicial" onPress={()=> props.navigation.navigate('Tela inicial')}>
                    
                </Button>
            </View>

        </View>

    );
}