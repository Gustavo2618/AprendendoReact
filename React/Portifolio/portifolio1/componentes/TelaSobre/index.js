import React from "react";
import { View, Image, Text } from 'react-native';
import estilos from "./estilos";
import sobre from '../../assets/perfil.jpeg';





export default function TelaSobre() {
    return (
        <View style={estilos.container}>
            <View style={estilos.card}>
                <Image source={sobre} style={estilos.img}></Image>
                <Text style={estilos.titulo}> Luiz Gustavo Gomes Monteiro</Text>
                <Text style={estilos.descricao}>Aluno do curso de Bacharelado em Ciência da Computação na Universidade Estadual do Ceará</Text>
                <Text style={estilos.descricao}>Idade: <Text style={estilos.contato}>31</Text></Text>
                <Text style={estilos.descricao}> Tel: <Text style={estilos.contato}>(85) 989454373</Text></Text> 
                <Text style={estilos.descricao}>Email: <Text style={estilos.contato}>luizg473@gmail.com</Text></Text>

            </View>
        </View>
    )
};