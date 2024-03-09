import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#2c2d2e',
        alignItems:'center',
        justifyContent:'center',
        padding:15,
        
    },
    logo:{
        height:80,
        width:80,
        borderRadius:100,
        marginBottom:10
    },
    text:{
        color:'#b2b2b2',
        marginBottom:20,
        textAlign:'center',
        
        
    },
    titulo:{
        color:'#107c0f',
        fontSize:26,
        fontWeight:'bold',
        marginBottom:10
    },
    Card:{
        backgroundColor:'#107c0f',
        width:250,
        marginBottom:20,
        flexDirection:'row',
        alignItems:'center',
        borderRadius:10,
        paddingHorizontal:20,
        paddingVertical:10
        
    },
    cardImg:{
        height:80,
        width:80,
        borderRadius:100,
        marginBottom:10,
        marginRight:10
    },
    cardTexto:
    {
        fontSize:18,
        color:'#fff',
        textAlign:'left',
        width:100
    }

});

export default estilos;