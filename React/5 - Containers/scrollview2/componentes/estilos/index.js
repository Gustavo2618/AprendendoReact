import { StyleSheet } from "react-native";

const estilos = StyleSheet.create(
    {
        container:{
            flex:1,
            paddingHorizontal:10,
            marginTop:30,
            backgroundColor:'#f2c50b'
        },
        imagem:{
            height:200,
            width:300,
            marginBottom:10,
        },
        titulo:{
            fontSize:36,
            fontWeight:"bold",
            marginVertical:20,
            textAlign:"center"
        },
        subtitulo:{
            fontSize:22,
            fontWeight:'bold',
            marginBottom:10
        },
        descricao:{
            fontSize: 16,
            marginBottom:10,
        },
        card:{
            padding:10,
            borderWidth:1,
            borderColor:'#000',
            backgroundColor:'#fff',
            marginBottom:20,
        }
    }
)

export default estilos;