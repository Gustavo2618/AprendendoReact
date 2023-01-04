import React from "react";
import {View, Button ,Image, Text} from 'react-native';

import logo from '../../assets/logo.jpg';
import styles from "../Estilos/styles";

export default function TelaInicial(props)
{
    return(
        <View style = {styles.container}>
            <Text>Star Wars ordem cronológica</Text>
            <Image source={logo} style={styles.imagem}></Image>
            <Text style={styles.titulo}>Você sabe qual é a ordem cronologíca 
            da franquia Star Wars?</Text>
            <Text style={styles.textos}>Os principais filmes da franquia estão divididos em trilogias clique no botão
                a seguir para confetir.</Text>
            <Button title="Ver 1ª Trilogia" color="#372d00" onPress={()=> {props.navigation.navigate('Trilogia 1')}}></Button>
            <Button title="Ver 2ª Trilogia" color="#372d00" onPress={()=> {props.navigation.navigate('Trilogia 2')}}></Button>
            <Button title="Ver 3ª Trilogia" color="#372d00" onPress={()=> {props.navigation.navigate('Trilogia 3')}}></Button>
        </View>
    );
}   