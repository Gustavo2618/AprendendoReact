import { StyleSheet } from "react-native";

const estilos = StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#209000',
            padding:10,
            
            
        },
        imagemCapa:{
            width:100,
            height:100,
            borderRadius:100,
            marginBottom:20,
            alignSelf:"center"
            
          
        },
        boxBotao:{
            marginBottom:5,
        },
        card:{
            // alignItems:'center',

            backgroundColor:'#fff',
            padding:10,
            borderRadius:20,
            borderWidth:5,
            width:320
            
        },
        titulo:{
            textAlign:"center",
            fontSize:20,
            marginBottom:5,
            fontWeight:"bold"
        },
        subtitulonome:{
            fontSize:16,
            fontWeight:"bold",
            marginBottom:10,
            textAlign:"center"
        }
    }
);


export default estilos;