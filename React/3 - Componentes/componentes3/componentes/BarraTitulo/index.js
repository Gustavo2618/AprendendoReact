import React from "react";
import {View , Text} from 'react-native';

import estilosBarraTitulo from "./style";

export default function  BarraTitulo(){
    return (
        <View style={estilosBarraTitulo.container}>
            <Text style ={estilosBarraTitulo.nomeAtor}>
                ator famoso
            </Text>

        </View>
    )
}
