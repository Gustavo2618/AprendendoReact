import React from "react";
import { Text , View, Image} from "react-native";

import obra from '../../assets/Filme.png';
import estilosConteudo from "./style";

export default function Conteudo(){
    return(
        <View style={estilosConteudo.container}>
            <Text style={estilosConteudo.titulo}>Sobre o Autor</Text>

            <Text style={estilosConteudo.subtitulo}>Sua Vida</Text>
            <Text style={estilosConteudo.paragrafo}>Nascido em Washington, DC, 21 de dezembro de 1948</Text>
            <Text style={estilosConteudo.paragrafo}>Casado com a atriz Latanya Richardson, que conhecera ainda nos tempos do Morehouse College.</Text>
            
            <Text style={estilosConteudo.subtitulo}>Início da carreira</Text>
            <Text style={estilosConteudo.paragrafo}>Seu primeiro filme se chama Together for Days que estreou em 1972.</Text>   
            <Image style={estilosConteudo.img} source={obra}></Image>
        </View>
    );


}