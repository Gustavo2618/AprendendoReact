import { StyleSheet } from "react-native";

const estilos =StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        backgroundColor:'#fff',
        justifyContent:'center',
        textAlign:'center',
        alignItems:'center'
    },
    img:{
        width:300,
        height:200,
        alignItems:'center', marginBottom:20
    },
    titulo:{
        fontSize:20,
        fontWeight:"bold", 
        marginBottom:20
    },
    texto:{
        fontSize:16,
        textAlign:'center',
        marginBottom:20,
    },
    tituloimg:{
        fontSize:16,
        fontWeight:"bold",
        color:'#fff',
        marginTop:10,
        marginBottom:5,
    },
    textoimg:{
        fontSize:14,
        color:'#fff',
        marginTop:5,
        marginBottom:5,
    }
});

export default estilos;