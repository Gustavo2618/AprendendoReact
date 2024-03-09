import react from "react";
import {View, Text, Pressable, Image,ScrollView } from 'react-native';
import galaxia01 from "./../../assets/galaxias1.png";
import galaxia02 from "./../../assets/galaxias2.png";
import imgPlanetas from "./../../assets/icon-planet.png";
import imgBuracoNegro from "./../../assets/icon-buraco-negro.png";
import imgHome from "./../../assets/icon-home.png";
import estilos from "./estilos";

export default function TelaGalaxias(props){
    return(
        <ScrollView>
            <View style={estilos.container}>
                <Text style={estilos.titulo}>Galáxias</Text>
                <Text style ={estilos.texto}>Na cosmologia, uma galáxia é um grande sistema, gravitacionalmente ligado,
                    que consiste de estrelas, remanescentes de estrelas, um meio interestelar de gás e poeira,
                     e um, importante mas insuficientemente conhecido, componente apelidado de matéria escura.</Text>
                
                <Image source={galaxia01} style={estilos.image}></Image>
                <Text style ={estilos.texto}>A Via Láctea é uma galáxia espiral, da qual o Sistema Solar faz parte.
                     Vista da Terra, aparece como uma faixa brilhante e difusa que circunda toda a esfera celeste,
                      recortada por nuvens moleculares que lhe conferem um intrincado aspecto irregular e recortado.</Text>
                <Image source={galaxia02} style={estilos.image}></Image>
                <Pressable onPress={()=> {props.navigation.navigate("Planetas")}}
                 style={estilos.btnPressable}>
                    <Image source={imgPlanetas} style={estilos.iconPressable}></Image>
                    <Text style={estilos.textPressable}>Planetas</Text>
                </Pressable>
                <Pressable onPress={()=>{props.navigation.navigate("BuracoNegro")}} style={estilos.btnPressable}>
                    <Image source ={imgBuracoNegro} style={estilos.iconPressable}></Image>
                    <Text style={estilos.textPressable}>Buraco Negro</Text>
                </Pressable>
                <Pressable onPress={()=> {props.navigation.navigate("Home")}} style={estilos.btnPressable}>
                    <Image source={imgHome} style={estilos.iconPressable}></Image>
                    <Text style={estilos.textPressable}>Home</Text>

                </Pressable>
            </View>
        </ScrollView>
    );


}