import React from "react";
import{View, Text, Button, Image} from 'react-native';
import estilos from "./estilos";
import imgJavaScript from '../assets/javascript.png';

export default function TelaJavaScript(props)
{
    return(
        <View style={estilos.fundoJs}>
            <View style={estilos.container}>
            <Image source={imgJavaScript} style={estilos.img}></Image>
            <Text style={estilos.titulo}>JavaScript</Text>
            <Text style={estilos.texto}>Veja duas Tecnologias para se tornar um programador fullStack web JavaScript</Text>
            <View style={estilos.containerbuttons}>
                <Button title="FRONT-END" onPress={()=> {props.navigation.navigate('React')}}></Button>
                <Button title="BACK-END" onPress={()=>{props.navigation.navigate('Node.js')}}></Button>
            </View>
            </View>
        </View>
    );

}