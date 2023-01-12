import { StyleSheet } from "react-native";

const estilos = StyleSheet.create(
    {
        titulo:{
            fontSize: 50,
            color:'white',//branco?
            textAlign:'center',
            marginVertical:25,
            
        },
        imagem:{
            width:'80%',
            height: 115,
        },
        container:{
            backgroundColor: "#CC0000",//vermelho
            height:'100%'
        },
        areItem:{
            margin:25,
            backgroundColor:'white',
            alignItems:'center',
        },
        areaInformativa:{
            width:'100%',
            height:35,
            backgroundColor:'#DCDCDC',
            justifyContent:'center',
        },
        textoInformativo:{
            color:'#CC0000',
            fontSize:20,
            paddingHorizontal:15,
        }
    }
);


export default estilos;