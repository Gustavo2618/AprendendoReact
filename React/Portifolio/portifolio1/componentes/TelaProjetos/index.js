import React from "react";
import { View, Text, ScrollView } from 'react-native';
import estilos from "./estilos";




export default function TelaProjetos() {
    return (
        <ScrollView style={estilos.Scroll}>
            <View style={estilos.container}>
                <Text style={estilos.titulo}>Tela Projetos</Text>
                <Text style={estilos.descricao}>Nessa tela temos como objetivo mostrar projetos em que já trabalhei. 
                Monstrando as linguagens que tenho experiência e qual foi meu papel nas soluções desenvolvidas. </Text>
                <View style={estilos.card}>
                    <Text style={estilos.tituloCard}>TPM HP</Text>
                    <Text style={estilos.descricaoCard}>Nesse projeto tinhamos como objetivo usar as ferramentas que conseguem fazer uso do chip 
                    TPM muito conhecido pela sua capacidade criptográfica e de garantir segurança usando chaves e controle do estado do computador. Realizando 
                    como produto uma prova de conceito capaz de  autenticar um computador que possua TPM. Nesse projetos Utilizamos a ferramenta do
                    <Text style={estilos.destaqueFerramenta}> WOLFTPM.</Text></Text>
                    <Text>Linguagens:<Text style={estilos.destaqueFerramenta}> C</Text></Text>
                </View>
                <View style={estilos.card}>
                    <Text style={estilos.tituloCard}>Smart UECE</Text>
                    <Text style={estilos.descricaoCard}>Esse projeto tinha como objetivo desenvolver ferramentas no ambiente mobile para uso no ambiente universitário.
                     A melhor forma de fazer isso era utilizando aplicativos móveis que facilitassem a interação com a universidade atráves da tecnlogia. Nesse sentido
                     foram desenvolvidos aplicativos, um para o restaurante universitário que ajudava os estudantes com informações básicas sobre o mesmo e
                     disponibilizava os pratos que seriam servidos durante a semana no horário do almoço e janta. O outro aplicativo interagia com a grade curricular 
                     dos alunos mostrando as disciplinas que estavam matriculados durante o semestre, hórarios das mesmas, salas de aula , bloco e etc. </Text>
                     <Text>Linguagens:<Text style={estilos.destaqueFerramenta}> Android e Flutter</Text></Text>
                </View>
                <View style={estilos.card}>
                    <Text style={estilos.tituloCard}>Autenticação de dispositivos USB</Text>
                    <Text style={estilos.descricaoCard}>Nesse projeto o principal objetivo era criar um método que pudesse autenticar dispositivos que estão sendo conectados 
                    ao computador via USB. Seguimos a especificação USB para autenticação de dispositivos utilizando a Jetson nano e a raspberry pi como dispositivos USB.</Text>
                    <Text>Linguagens:<Text style={estilos.destaqueFerramenta}> C</Text></Text>
                </View>
                
                
            </View>
        </ScrollView>
    )
};