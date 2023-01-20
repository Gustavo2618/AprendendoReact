import React from "react";
import {Text, View, Image} from 'react-native';
import armazem01 from '../../assets/restaurantes/restaurante01.png';
import armazem02  from '../../assets/restaurantes/restaurante02.png';
import armazem03 from '../../assets/restaurantes/restaurante03.png';
import estilos from "./estilos";

export default function TelaRestaurante()
{
    return (
        <View style={estilos.containerPai}>
            <Text style={estilos.titulo}>Barras de Restaurantes</Text>
            <Text style={estilos.descricao}>O prazer da boa comida você encontra em Paraty. Com inúmeras opções de restaurantes, a cidade oferece o melhor da culinária internacional, juntamente à saborosa cozinha calçara. Confira alguns bares e restaurantes famosos.</Text>
            <View>
                <View style={estilos.card}>
                    <Image source={armazem01} style={estilos.imagem}></Image>
                    <Text style={estilos.titulo2}>Armazén Bar</Text>
                    <Text>Localização Rod Rio-Santos.</Text>
                </View>
                <View style={estilos.card}>
                    <Image source={armazem02} style={estilos.imagem}></Image>
                    <Text style={estilos.titulo2}>Bendita's Restaurante</Text>
                    <Text>Localização Centro Histórico</Text>
                </View>
                <View style={estilos.card}>
                    <Image source={armazem03} style={estilos.imagem}></Image>
                    <Text style={estilos.titulo2}>SEREIA DO MAR PIZZA-BAR</Text>
                    <Text>Localização Praia do Jabaquera</Text>
                </View>
            </View>
        </View>
        
    )
}