
import React from "react";
import {Image, Text, Pressable , View} from 'react-native';
import estilos from "./estilos";
import imgmain from '../../assets/fundo-tela-inicial.png';

export default function TelaInicial(props)
{
    return (
        <View style={estilos.container}>
            <Image source={imgmain} style={estilos.image}></Image>
            <Text style={estilos.titulo}>Conheça um pouco sobre o universo</Text>
            <Text style={estilos.texto}>Toque os botões abaixo e conheça um pouco mais sobre o que existe no céu.</Text>
            <View style={estilos.boxBotoes}>
                <Pressable style={estilos.botaoContainer} onPress={()=>{props.navigation.navigate("Planetas")}}>
                    <Text style={estilos.botaoLabel}>Planetas</Text>
                </Pressable>
                <Pressable style={estilos.botaoContainer} onPress={()=>{props.navigation.navigate("Galáxias")}}>
                    <Text style={estilos.botaoLabel}>Galáxias</Text>
                </Pressable>
                <Pressable style={estilos.botaoContainer} onPress={()=>{props.navigation.navigate("Buraco Negro")}}>
                    <Text style={estilos.botaoLabel}>Buraco Negro</Text>
                </Pressable>
            </View>
        </View>
        
    );
}