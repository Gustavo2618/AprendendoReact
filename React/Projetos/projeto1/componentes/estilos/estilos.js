import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#e1e3e4',
        justifyContent:'center'
    },
    titulo:{
        fontSize:26,
        fontWeight:"bold",
        marginBottom:10,
        textAlign:"center",
       
    },
    descricao:{
        marginBottom:20,
        textAlign:'center',
     },
    card:
    {
        width:320,
        padding:10,
        backgroundColor: '#fff',
        borderRadius:5,
        borderColor:'#979797',
        borderWidth:1,
    },
    imgCapa:{
        width:300,
        height:200,
        marginBottom:20,
    },

    boxBotao:{
       marginBottom:10,
    }
});



export default estilos;