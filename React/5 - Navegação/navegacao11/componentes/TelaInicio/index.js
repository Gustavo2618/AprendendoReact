import React from "react";
import {Image, Text, View } from 'react-native';
import estilos from "../estilos";
import carro from '../../assets/carros/civic.png';
import moto from '../../assets/motos/CG-start.png';

export default function Inicio(props)
{
    return(
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Veículos Honda</Text>

            <View style={estilos.areItem} onTouchEnd={()=>{props.navigation.navigate('Carros')}}>
                <Image source={carro} style={estilos.imagem}></Image>
                <View style={estilos.areaInformativa}>
                    <Text style={estilos.textoInformativo}>Carros</Text>
                </View>

            </View>
            <View style={estilos.areItem} onTouchEnd={()=>{props.navigation.navigate('Motos')}}>
                <Image source={moto} style={estilos.imagem}></Image>
                <View style={estilos.areaInformativa}>
                    <Text style={estilos.textoInformativo}>Motos</Text>
                </View>
            </View>
        </View>
    );
}