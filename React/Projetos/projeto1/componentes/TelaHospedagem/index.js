import React from "react";
import {Text, View, Image} from 'react-native';
import missanga from '../../assets/hospedagens/hospedagem01.png';
import forte  from '../../assets/hospedagens/hospedagem02.png';
import imperial from '../../assets/hospedagens/hospedagem03.png';
import estilos from "./estilos";

export default function TelaHospedagem()
{
    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Pousadas e Hotéis em Paraty</Text>
            <Text style={estilos.descricao}>Paraty conta com excelentes hotéis e pousadas cujos preços podem variar 
                de R$ 1.200,00 à 1.500,00. Veja algumas pousadas abaixo.</Text>

                <View style={estilos.card}>
                    <Image source={missanga} style={estilos.imagem}></Image>
                    <Text style={estilos.titulo2}>Pousada Missanga</Text>
                    <Text >Valor Médio: R$ 350,00</Text>
                    <Text>Localização: Próx. à AV. Roberto Silveira</Text>
                </View>
                <View style={estilos.card}>
                    <Image source={forte} style={estilos.imagem}></Image>
                    <Text style={estilos.titulo2}> Pousada Morro do Forte</Text>
                    <Text> Valor Médio: R$ 450,00</Text>
                    <Text> Localização: Próximo à Praia - Pontal</Text>
                </View>
                <View style={estilos.card}>
                    <Image style={estilos.imagem} source={imperial}></Image>
                    <Text style={estilos.titulo2}>Pousada Porto Imperial</Text>
                    <Text>Valor médio: R$ 550,00</Text>
                    <Text>Localização: Centro Histórico </Text>
                </View>
        </View>
    )
}