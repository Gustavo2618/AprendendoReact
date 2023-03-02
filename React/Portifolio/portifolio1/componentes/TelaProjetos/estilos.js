import { StyleSheet } from "react-native";


const estilos = StyleSheet.create(
    {
        Scroll:{
            height:'100%',
            backgroundColor:'#20ddaa',
            flex:1

        },
        container:{
            flex:1,
            padding:20,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'#20ddaa' //verde legal
        },
        titulo:{
            fontSize:20,
            fontWeight:'bold',
            marginBottom:10,
        },

        tituloCard:{
            fontSize:16,
            fontWeight:'bold',
            marginBottom:10,
        },
        descricaoCard:{
            fontSize:14,
            textAlign:"justify",
            marginBottom:5,
        },
        linguagem:{
            fontWeight:'bold',
        },
        destaqueFerramenta:{
            fontWeight:'bold',
        },
        
        descricao:{
            fontSize:16,
            textAlign:"justify",
            marginBottom:5,
            
        },
        card:{
            backgroundColor:'#fff',
            borderRadius:20,
            padding:10,
            alignItems:'center',
            borderWidth:5,
            marginBottom:10
        },
    }
);

export default estilos;