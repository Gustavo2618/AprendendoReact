import React from "react";
import { Text, View, Image, ScrollView  } from "react-native";

import estilos from "../estilos";
import civic from '../../assets/carros/civic.png';
import hrv from '../../assets/carros/hr-v.png';
import cityhatch from '../../assets/carros/new-city-hatchback.png';
import citysedan from '../../assets/carros/new-city-sedan.png';
export default function Carros(){
    return(
        <ScrollView style={estilos.container}>
            <Text style={estilos.titulo}>Carros</Text>
            <View style={estilos.areItem}>
                <Image source={civic} style={estilos.imagem}></Image>
                <View style={estilos.areaInformativa}>
                <Text style={estilos.textoInformativo}>Honda Civic</Text>
                </View>
            </View>

            <View style={estilos.areItem}>
                <Image source={hrv} style={estilos.imagem}></Image>
                <View style={estilos.areaInformativa}>
                    <Text style={estilos.textoInformativo}>HRV</Text>
                </View>
            </View>
            <View style={estilos.areItem}>
                <Image source={cityhatch} style={estilos.imagem}></Image>
                <View style={estilos.areaInformativa}>
                    <Text style={estilos.textoInformativo}>City Hatch</Text>
                </View>
            </View>
            <View style={estilos.areItem}>
                <Image style={estilos.imagem} source={citysedan}></Image>
                <View style={estilos.areaInformativa}>
                    <Text style={estilos.textoInformativo}>City Sedan</Text>
                </View>
            </View>

        </ScrollView>



    );
}