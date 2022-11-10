import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:20,
        fontWeight: 700,
    },
    textoTitulo:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom:20,
        
    },
    texto:{
        fontSize: 18,
        marginBottom: 20,
        textAlign:'center'
    },
    boxButton:{
        width:200,
        height:50
    },

});

export default estilos;