import React from "react";
import {View ,Image, Text} from 'react-native';
import estilos from "../Estilos/styles";
import imagem from '../../assets/sith.jpg';

export default function TelaTrilogia3()
{
    return(
        <View style={estilos.container}>
            <View style={estilos.boxDescricao}>
                <Text style={estilos.titulo}>A história de Rey</Text>
                <Image source={imagem} style={estilos.imagem}></Image>
                <Text style={estilos.textos}>Trilogia sequels. Episódios VII, VIII e IX</Text>
                <Text style={estilos.textos}>Enquanto surge uma nova ameaça para a galáxia, 
                Rey, uma catadora de sucata, e Finn, um soldado imperial desertor,
                 devem se juntar a Han Solo e Chewbacca oara oricyrar a única esperança de restaurar a paz da galáxia.</Text>
            </View>
        </View>
    );
}