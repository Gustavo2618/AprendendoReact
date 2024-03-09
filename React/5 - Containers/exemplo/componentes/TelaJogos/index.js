import React from "react";
import { Text, View, ScrollView,ImageBackground} from "react-native";
import estilos from "./estilos";
import cyber from './../../assets/jogo-2.png';
import hor5 from './../../assets/jogo-3.png';
import halo from './../../assets/jogo-4.png';
export default function TelaJogos(props)
{
    return(
        <ScrollView>
            <View style={estilos.container}>
                <Text style={estilos.titulo}>Jogos em 4k</Text>
                <Text style={estilos.desc1}>Os principais jogos estão aqui.
                Veja abaixo 3 exemplos de grande sucesso.</Text>
                <View style={estilos.boxjogo}>
                    <ImageBackground source={hor5} style={estilos.imgBack} >
                        <Text style={estilos.textimgback}>Forza Horizon 5</Text>
                    </ImageBackground>
                    <Text style={estilos.desc2}>Forza Horizon 5 é um jogo de corrida.
                         É o quinto jogo da série Forza Horizon e o décimo segundo título principal da franquia Forza.
                         O jogo se passa em uma representação ficcional do México.</Text>
                </View>
                
                <View style={estilos.boxjogo}>
                    <ImageBackground source={cyber} style={estilos.imgBack} >
                        <Text style={estilos.textimgback}>Cyber Punk 2077</Text>
                    </ImageBackground>
                    <Text style={estilos.desc2}>Cyberpunk 2077 é um jogo eletrônico de RPG de ação desenvolvido e publicado pela CD Projekt.</Text>
                </View>

                <View style={estilos.boxjogo}>
                    <ImageBackground source={halo} style={estilos.imgBack} >
                        <Text style={estilos.textimgback}>Halo 5: Guardians</Text>
                    </ImageBackground>
                    <Text style={estilos.desc2}>Halo 5: Guardians é um videojogo de tiro em primeira pessoa,
                     parte da franquia Halo e sequência de Halo 4.</Text>
                </View>
            </View>
        </ScrollView>
    );
}