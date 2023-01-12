import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import Capa from '../../assets/img1.png';
import estilosTopo from './estilos';

export default function Topo()
{
    return (
        <View style={estilosTopo.containerTopo}>
            <Image style={estilosTopo.totoImg} source={Capa}></Image>
            <Text style={estilosTopo.topoTitulo}> Nitendo Switch</Text>
        </View>
    )
}

