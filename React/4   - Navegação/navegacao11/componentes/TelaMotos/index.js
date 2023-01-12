import React from "react";
import {ScrollView,Text, Image, View} from 'react-native';

import estilos from "../estilos";
import start from '../../assets/motos/CG-start.png';
import titan from '../../assets/motos/CG-titan.png';
import crf from '../../assets/motos/CRF-250F.png';
import pop from '../../assets/motos/POP-110i.png';

export default function Motos(){
    return(
        <ScrollView style={estilos.container}>
            <Text style={estilos.titulo}>Motos</Text>
            <View style={estilos.areItem}>
                <Image source={start} style={estilos.imagem}></Image>
                <View style={estilos.areaInformativa}>
                    <Text style={estilos.textoInformativo}>CG Start</Text>
                </View>
            </View>

            <View style={estilos.areItem}>
                <Image source={titan} style={estilos.imagem}></Image>
                <View style={estilos.areaInformativa}>
                    <Text style={estilos.textoInformativo}>CG Titan</Text>
                </View>
            </View>

            <View style={estilos.areItem}>
                <Image source={crf} style={estilos.imagem}></Image>
                <View style={estilos.areaInformativa}>
                    <Text style={estilos.textoInformativo}>CRF-250F</Text>
                </View>
            </View>

            <View style={estilos.areItem}>
                <Image source ={pop} style={estilos.imagem}></Image>
                <View style={estilos.areaInformativa}>
                    <Text style={estilos.textoInformativo}>POP 110i</Text>
                </View>
            </View>
        </ScrollView>
       

    );
}