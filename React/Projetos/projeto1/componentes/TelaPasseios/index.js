import React from "react";
import {Text, View, Image} from 'react-native';
import tirolesa from '../../assets/passeios/passeio01.png';
import rafting from '../../assets/passeios/passeio02.png';
import canoa from '../../assets/passeios/passeio03.png';
import estilos from "./estilos";
export default function TelaPasseio()
{
    return (
        <View style={estilos.containerPai}>
            <Text style={estilos.titulo}>Passeios em Paraty</Text>
            <Text style={estilos.descricao}>O munícipio  de Paraty está quase inteiro em áreas de parques e de preservação ambiental.
                Muitas são as opções de passeios para quem curte a natureza: passeios de jeep, de bike, caminhadas por trilhas entre outros
                Veja dois exemplos:
            </Text>
            <View style={estilos.card}>
                <Text style={estilos.titulo2}>Tirolesa</Text>
                <Image source={tirolesa} style={estilos.imagem}></Image>
            </View>
            <View style={estilos.card}>
                <Text style={estilos.titulo2}>Rafting</Text>
                <Image style={estilos.imagem} source={rafting}></Image>
            </View>
            <View style={estilos.card}>
                <Text style={estilos.titulo2}>Canoagem no mangue</Text>
                <Image style={estilos.imagem} source={canoa}></Image>
            </View>
        </View>
    )
}