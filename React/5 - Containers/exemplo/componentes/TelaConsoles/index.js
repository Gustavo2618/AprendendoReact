import React from "react";
import { Text, View ,Image, ScrollView} from "react-native";

import estilos from "./estilos";
import imgs from './../../assets/console-1.png';
import imgx from './../../assets/console-2.png';
export default function TelaConsoles(props)
{
    return(
        <ScrollView style={estilos.container}>
            <View style={estilos.container2}>
                <Image source ={imgs} style={estilos.img}></Image>
                <Text style={estilos.titulo}>XBOX SERIRES S</Text>
                <Text style={estilos.subtitulo}>Desempenho de última geração no menor Xbox de todos os tempos</Text>
                <Text style={estilos.descicao}>O Series S é pra quem busca jogos de nova geração gastando pouco é o console
                    mais barato da nova geração. Ele é equilíbrio entre gráfico e performance. </Text>
            </View>
            <View style={estilos.container2}>
                <Image source={imgx} style={estilos.img}></Image>
                <Text style={estilos.titulo}>XBOX SERIES X</Text>
                <Text style={estilos.subtitulo}>O Xbox mais rápido e poderoso de todos os tempos.</Text>
                <Text style={estilos.descicao}>O Series X é pra quem quer poder absoluto. O console mais poderoso do mercado, excelência em gráficos e performance.</Text>
            </View>
        </ScrollView>
    );
}