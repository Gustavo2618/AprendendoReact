import React from "react";
import { Text, View,Image, Pressable } from "react-native";
import estilos from "./estilos";

import xbox from './../../assets/logo.png';
import cardConsoles from './../../assets/console-1.png';
import cardJogos from './../../assets/jogo-1.png';
import cardNuvem from './../../assets/xcloud-1.png';

export default function TelaInicial(props)
{
    return(
        <View style={estilos.container}>
            <Image source={xbox} style={estilos.logo} ></Image>
            <Text style={estilos.titulo}> Xbox</Text>
            <Text style={estilos.text}>Xbox é uma marca de consoles criada pela Microsoft. Toque nos cards para conhecer.</Text>
            <Pressable style={estilos.Card} onPress={()=> {props.navigation.navigate("Consoles")}}>
                <Image source={cardConsoles} style={estilos.cardImg}></Image>
                <Text style={estilos.cardTexto}>Conheça os consoles</Text>
            </Pressable>
            <Pressable style={estilos.Card} onPress={()=>{props.navigation.navigate("Jogos")}}>
                <Image source={cardJogos} style={estilos.cardImg}></Image>
                <Text style={estilos.cardTexto}>Conheça os jogos</Text>
            </Pressable>
            <Pressable style={estilos.Card} onPress={()=> {props.navigation.navigate("Nuvem")}}>
                <Image source={cardNuvem} style={estilos.cardImg}></Image>
                <Text style={estilos.cardTexto}>Conheça o xCloud</Text>
            </Pressable>
        </View>
    );
}