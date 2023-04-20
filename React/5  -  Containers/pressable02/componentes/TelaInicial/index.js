import React from "react";
import { View, Pressable, Text, Image } from "react-native";
import estilos from "./estilos";
import icon from '../../assets/info.png';
import iconBr from '../../assets/info-branco.png';

export default function TelaInicial(props)
{
    return(
        <View style={estilos.container}>
            <Pressable style={estilos.botao} onPress={()=> {props.navigation.navigate('Sobre')}}>
                <Text style={estilos.botaoTitle}>Sobre</Text>
            </Pressable>

            <Pressable style={estilos.botao2} onPress={()=> {props.navigation.navigate('Sobre')}}>
                <Image style={estilos.botao2Icon} source={icon}></Image>
                <Text style={estilos.botao2Title}>Sobre</Text>
            </Pressable>

            <Pressable style={estilos.botao3} onPress={()=>{props.navigation.navigate('Sobre')}}>
                <Image style={estilos.botao3Icon} source={iconBr}></Image>
            </Pressable>

            <Pressable style={estilos.botao4} onPress={()=>{props.navigation.navigate('Sobre')}}>
                <Text style={estilos.botao4Titulo}>Navegar para tela sobre</Text>
                <Text >Clique nesta caixa de texto para navegar para a tela Sobre</Text>
            </Pressable>
        </View>
    );
}