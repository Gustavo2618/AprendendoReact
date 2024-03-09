import { StyleSheet } from "react-native";

const estilos =StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:20
    },
    titulo:{
        color:'#107c0f',
        fontSize:26,
        fontWeight:'bold',
        marginBottom:20,
    },
    img:{
        width:300,
        height:200,
        borderRadius:5
    },
    subtitulo:{
        fontSize:20,
        fontWeight:'bold',
        color:'#d5d5d5',
        marginBottom:30,
    },
    desc:{
        color:'#b2b2b2',
        marginBottom:20,
        textAlign:'center',
        justifyContent:'center'
    },
});

export default estilos;