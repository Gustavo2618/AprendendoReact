import React from "react";
import { View, Image, Button, Text } from 'react-native';
import estilos from "./estilos";
import gus from '../../assets/perfil.jpeg';


export default function TelaInicial(props) {
    return (
        <View style={estilos.container}>
            <View style={estilos.card}>
                <Text style={estilos.titulo}>Portífolio</Text>
                <Text style={estilos.subtitulonome}>Luiz Gustavo Gomes Monteiro</Text>
                <Image source={gus} style={estilos.imagemCapa}></Image>
                <View style={estilos.boxBotao}>
                    <Button title="Sobre" color='#209000' onPress={()=>props.navigation.navigate('TelaSobre')}></Button>
                </View>
                <View style={estilos.boxBotao}>
                    <Button title="Projetos" color='#209000' onPress={()=>props.navigation.navigate('TelaProjetos')}></Button>


                </View>
            </View>
        </View>
    )
};