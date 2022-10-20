import React from "react";
import {Image, Text, View} from 'react-native';
import ator from '../../assets/Foto.png';
import estilosCard from "./style";

export default function Card()
{
    return (
        <View style={estilosCard.container}>
            <View style={estilosCard.box}>
                <Image style={estilosCard.img} source={ator}></Image>
                <Text style={estilosCard.titulo}> Samuel Jackson</Text>
                <Text style={estilosCard.texto}>Ator e Produtor Norte-Americano</Text>
            </View>
            
        </View>


    );
}