
import {View, Text, Pressable, Image } from 'react-native';
import imgBuracoNegro from './../../assets/galaxias1.png';
import estilos from './estilos';
import iconGalaxias from './../../assets/icon-galaxy.png';
import iconHome from './../../assets/icon-home.png';
export default function TelaBuracoNegro(props){
    return(
      
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Buraco Negro</Text>
            <Text style={estilos.text}>Buraco negro é uma região do espaço-tempo em que o campo gravitacional é tão intenso
                 que nada pode escapar dela. A teoria da relatividade geral prevê que uma massa suficientemente
                  compacta pode deformar o espaço-tempo para formar um buraco negro.</Text>
            <Image style={estilos.imagem} source={imgBuracoNegro}></Image>
            <Pressable onPress={()=>{props.navigation.navigate("Galaxias")}} style={estilos.pressBtn}>
                <Image source={iconGalaxias} style={estilos.pressImage}></Image>
                <Text style={estilos.pressText}>Galáxias</Text>
            </Pressable>

            <Pressable style={estilos.pressBtn} onPress={()=>{props.navigation.navigate("Home")}}>
                <Image source={iconHome} style={estilos.pressImage}></Image>
                <Text style={estilos.pressText}>Home</Text>
            </Pressable>
        </View>
        
    );
}