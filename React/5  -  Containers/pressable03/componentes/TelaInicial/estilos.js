import { StyleSheet } from "react-native";

const estilos = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#121212',
            padding:20,
            justifyContent:'center',
            alignItems:'center'
        },
        image:{
            width:320,
            height:200,
            borderRadius:10,
            marginBottom:10,
        },
        titulo:{
            width:300,
            fontSize:26,
            fontWeight:'bold',
            color:'#cf9556',
            marginBottom:10

        },
        texto:{
            marginBottom:10,
            width:320,
            fontSize:16,
            color:'#b2b2b2',
            marginBottom:25,
        },
        boxBotoes:{
            flexDirection:"row",
        },
        botaoContainer:{
            justifyContent:'center',
            alignItems:'center',
            paddingVertical:5,
            paddingHorizontal:15,
            backgroundColor:'#cf9556',
            margin:5,
            borderRadius:20,
        },
        botaoLabel:
        {
            color:'#252535',
            fontWeight:'bold',
            textAlign:'center'
        }
    }
)
export default estilos;