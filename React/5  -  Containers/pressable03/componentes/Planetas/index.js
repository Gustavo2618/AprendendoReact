import React from "react";

import { ScrollView, View, Text, Pressable, Image } from "react-native";
import estilos from "./estilos";
import img01 from './../../assets/planetas1.png';
import img02 from './../../assets/planetas.png';
import img03 from './../../assets/planeta-terra.png';
import iconhome from './../../assets/icon-home.png';
import icongalaxy from './../../assets/icon-galaxy.png';
export default function TelaPlanetas(props){
    return(
       
        <ScrollView>
           <View style={estilos.container}>
                <Text style={estilos.titulo}>Planetas</Text>
                <Text style={estilos.texto}>Os planetas do Sistema Solar são corpos celestes que orbitam 
                o Sol com massa suficiente para que a sua própria gravidade possibilita que assumam uma 
                forma arredondada, ou seja, a forma de equilíbrio estático.</Text>
                <Image source={img01} style={estilos.image}></Image>
                <Text style={estilos.texto}>Os planetas do nosso Sistema Solar formam um conjunto de oito
                 planetas que giram em torno do sol. Eles são: Mercúrio, Vênus, Terra, Marte, Júpiter,
                  Saturno, Urano e Netuno.</Text>
                <Image source={img02} style={estilos.image}></Image>
                <Text style={estilos.texto}>A Terra é o terceiro planeta a contar do Sol e o quinto maior do
                 Sistema Solar. Até onde se sabe o planeta em que vivemos é o único do nosso sistema solar
                  em condições de abrigar vida da forma como a conhecemos.</Text>
                <Image source={img03} style={estilos.image}></Image>
                
                    <Pressable
                    onPress={()=> {props.navigation.navigate("Galaxias")}}
                    style ={estilos.btnPressable}>
                        <Image source={icongalaxy} style={estilos.iconbtnPressable}></Image>
                        <Text style={estilos.textPressable}>Galáxias</Text>
                    </Pressable>
                    <Pressable
                    onPress={()=> {props.navigation.navigate("Home")}}
                    style ={estilos.btnPressable}>
                        <Image source={iconhome} style={estilos.iconbtnPressable}></Image>
                        <Text style={estilos.textPressable}>Início</Text>
                    </Pressable>
          
           
           </View>
        </ScrollView>
        
    );
}