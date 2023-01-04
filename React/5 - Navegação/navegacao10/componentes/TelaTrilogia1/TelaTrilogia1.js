import React from "react";
import {View,Image, Text} from 'react-native';

import imagem from '../../assets/darth-vader.jpeg';
import estilos from "../Estilos/styles";

export default function TelaTrilogia1()
{
    return(
       <View style={estilos.container}>
        <View style={estilos.boxDescricao}>
            <Text style={estilos.titulo}>A história de Darth Vader</Text>
            <Image source={imagem} style={estilos.imagem}></Image>
            <Text style={estilos.textos}> Trilogia prequel. Episódios I,II e III</Text>
            <Text style={estilos.textos}> Apesar de ter sido criada depois da trilogia original essa é a primeira tilogia na ordem cronologíca da série Star Wars. 
            Nela é contada a história do grande vilão Darth Vader.</Text>
            <Text style={estilos.textos}> Através dessa trilogia você sabe de onde ele veio e quem ele é.</Text>
        </View>
        
       </View>
    );
}