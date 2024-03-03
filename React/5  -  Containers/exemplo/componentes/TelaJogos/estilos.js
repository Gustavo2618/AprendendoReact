import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#000000',
        alignItems:'center',
        backgroundColor:'#121212',
        padding:30
    },
    titulo:{
        fontSize:26,
        color:'#107c0f',
        fontWeight:'bold',
        marginBottom:10,
    },
    desc1:{
        width:320,
        color:'#b2b2b2',
        textAlign:'center',
        marginBottom:25
    },
    boxjogo:{
        width:320,
        marginBottom:50,
    },
    imgBack:{
        width:320,
        height:180,
        marginBottom:10,
    },
    textimgback:{
        color:'#fff',
        fontSize:22,
        fontWeight:'bold',
        
        paddingHorizontal:15,
        paddingVertical:5
    },
    desc2:{
        color:'#d5d5d5',
        textAlign:'justify'
    },
   
});

export default estilos;