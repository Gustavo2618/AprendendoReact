import React from "react";
import { Image, View, Text, ScrollView } from 'react-native';
import estilos from "../estilos";
import imgcasal from '../../assets/casal.png';
import imgfilhos from '../../assets/filhos.png';
import imgvovo from '../../assets/vovo.png';
import imgirmaes from '../../assets/irmaes.png';

export default function TelaInicial() {
    return (
        <ScrollView style={estilos.container}>

            <Text style={estilos.titulo}>Família Simpsons</Text>
            <View style={estilos.card}>
                <Image source={imgcasal} style={estilos.imagem}></Image>
                <Text style={estilos.subtitulo}>O Casal</Text>
                <Text style={estilos.descricao}>Homer Jay Simpson é o pai e patriarca da família Simpsons.</Text>
                <Text style={estilos.descricao}>Marjorie Jacqueline "Marge" Bouvier Simpson é a esposa de Homer Simpson e mãe de Lisa, Bart e Maggie Simpson na série animada Os Simpsons.</Text>
            </View>

            <View style={estilos.card}>
                <Image style={estilos.imagem} source={imgfilhos}></Image>
                <Text style={estilos.subtitulo}>Os Filhos</Text>
                <Text style={estilos.descricao}>Bartholomew JoJo ou apenas Bart é o filho mais velho e mais travesso</Text>
                <Text style={estilos.descricao}>Lisa Marie é a filha do meio e a mais inteligente.</Text>
                <Text style={estilos.descricao}>Margaret Evelyn Lenny ou apenas Maggie é o bebê da casa.</Text>
            </View>
            <View style={estilos.card}>
                <Image style={estilos.imagem} source={imgvovo}></Image>
                <Text style={estilos.subtitulo}>O Vovô</Text>
                <Text style={estilos.descricao}>Abraham Jebediah "Abe" Simpson II, mais conhecido como Vovô é o pai de Hommer simpson</Text>
            </View>
            <View style={estilos.card}>
                <Image style={estilos.imagem} source={imgirmaes}></Image>
                <Text style={estilos.subtitulo}>As Cunhadas</Text>
                <Text style={estilos.descricao}>Patty e Selma são as irmãs de Margie e vivem de forma 'largada'.</Text>
            </View>
           

        </ScrollView>
    );
}