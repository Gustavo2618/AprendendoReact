import React from "react";
import { View , Text, Pressable} from "react-native";
import estilos from "../estilos/estilos";


export default function TelaInicial(props)
{
    return(
        <View style={estilos.container}>
            <Pressable
                style={estilos.botao} onPress={()=> {props.navigation.navigate('Sobre')}}>
                 <Text style={estilos.botaoTitulo}>Sobre</Text>
            </Pressable>
        </View>
    );
}