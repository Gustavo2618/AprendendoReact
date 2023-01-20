import React from "react";
import {View, Text, Image, Button} from 'react-native';
import estilos from "../estilos/estilos";
import paraty from '../../assets/01.png';

export default function TelaInicial(props){

    return(
        
        <View style={estilos.container}>
            <View style={estilos.card}>
                <Text style={estilos.titulo}>Paraty</Text>
                <Text style={estilos.descricao}>Saiba o que visitar em Paraty</Text>
                <Image source={paraty} style={estilos.imgCapa}></Image>
                <View style={estilos.boxBotao}>
                    <Button title="VER RESTAURANTES" onPress={()=>{props.navigation.navigate('TelaRestaurante')}} color='#372d00'></Button>
                </View>
                <View style={estilos.boxBotao}>
                    <Button title="VER PASSEIOS" onPress={()=>{props.navigation.navigate('TelaPasseio')}} color='#372d00'></Button>
                </View>
                <View style={estilos.boxBotao}>
                <Button title="VER HOSPEDAGEM" onPress={()=>{props.navigation.navigate('TelaHospedagem')}} color='#372d00'></Button>
                </View>
            </View>

        </View>
    )
};