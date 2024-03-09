import React from "react";
import { Text, Image, ImageBackground} from "react-native";
import imgfundo from './../../assets/fundo-xcloud.png';
import estilos from "./estilos";
import img1 from './../../assets/xcloud-2.png';
export default function TelaNuvem(props)
{
    return(
        <ImageBackground source={imgfundo} style={estilos.container}>
                <Text style={estilos.titulo}> Xbox Cloud Gaming</Text>
                <Text style={estilos.subtitulo}>Serviço de streming de jogos</Text>
                <Text style={estilos.desc}>Jogue mais de 100 jogos de console de alta qualidade no seu dispositivo favorito.</Text>
                <Text style={estilos.desc}>Desktop, Notebook, console ou até mesmo celular pode se tornar um XBOX.</Text>
                <Text style={estilos.desc}>Através de uma assinatura você terá um XBOX virtual sempre que precisar.</Text>
                <Image source={img1} style={estilos.img}></Image>
            </ImageBackground>
    );
}