import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import Jogos from '../../assets/img2.png';
import estilosConteudo from './estilos';


export default function Conteudo()
{
    return(
        <View style={estilosConteudo.container}>
            <Text style={estilosConteudo.titulo}>Os principais jogos estão aqui</Text>
            <Image style={estilosConteudo.img} source={Jogos}></Image>
            <Text style={estilosConteudo.descricao}>A família Nitendo Switch é o lar de jogos exclusivos de séries como Super Smash Bros.™, The Legend of Zelda™, Mario Kart™ e muitas outras. </Text>


        </View>
    )
}
