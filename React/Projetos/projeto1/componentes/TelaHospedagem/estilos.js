import { StyleSheet } from "react-native";

const estilos = StyleSheet.create(

    {
        container:{
        
            flex:1,
            justifyContent:'center',
            alignItems: 'center',
            padding:20,
            backgroundColor:'#beceff'

        },
        imagem:{
            height:80,
            width:300,
            padding:5,
            marginBottom:10,
        },
        titulo:{
            fontSize:20,
            marginBottom:5,
            fontWeight:"bold",
        },
        descricao:{
            fontSize:16,
            marginBottom:20,
            textAlign:"justify"
        },
        card:{
            padding:10,
            backgroundColor:'#fff',  
            marginBottom:5,
            width:320,
            borderColor: '#979797',
            borderRadius:5,
            borderWidth:1
    
        },
        titulo2:{
            fontWeight:"bold",
            marginBottom:10,
            fontSize:16,
        }
    }
);

export default estilos;
