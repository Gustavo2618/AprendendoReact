import React from "react";
import {Text, ScrollView, Image, View} from 'react-native';
import Capa from '../../assets/capa.png';
import estilos from "../estilos/estilos";

export default function TelaHome(){
    return (
        <View style={estilos.container}>
          <Image source={Capa} style={estilos.imagem}></Image>
          <Text style={estilos.titulo}>The Beatles</Text>
          <Text style={estilos.subtitulo}>Help</Text>
          <ScrollView>
            <Text style={estilos.paragrafo}>
                Help, I need somebody,
                Help, not just anybody
                Help, you know I need someone, help!</Text>
            <Text style={estilos.paragrafo}>
                When I was younger, so much younger than today
                I never needed anybody's help in any way
                But now these days are gone, I'm not so self assured
                Now I find I've changed my mind and opened up the doors</Text>
            <Text style={estilos.paragrafo}>
                Help me if you can, I'm feeling down
                And I do appreciate you being round
                Help me, get my feet back on the ground
                Won't you please, please help me?</Text>
            <Text style={estilos.paragrafo}>
                And now my life has changed in oh so many ways
                My independence seems to vanish in the haze
                But every now and then I feel so insecure
                I know that I just need you like I've never done before</Text>
            <Text style={estilos.paragrafo}>
                Help me if you can, I'm feeling down
                And I do appreciate you being round
                Help me, get my feet back on the ground
                Won't you please, please help me?</Text>
            <Text style={estilos.paragrafo}>
                When I was younger, so much younger than today
                I never needed anybody's help in any way
                But now these days are gone, I'm not so self assured
                Now I find I've changed my mind and opened up the doors</Text>
            <Text style={estilos.paragrafo}>
                Help me if you can, I'm feeling down
                And I do appreciate you being round
                Help me, get my feet back on the ground
                Won't you please, please help me?</Text>
          </ScrollView>
        </View>

    );

};