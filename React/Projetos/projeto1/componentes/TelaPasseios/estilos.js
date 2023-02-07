import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    imagem:{
        width:300,
        height:80,
        marginBottom:5,
    },
    containerPai:{
        flex:1,
        backgroundColor:"#f4fbc3",
        alignItems:'center',
        padding:20,
        justifyContent:'center'
    
        
    },
    titulo:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:5
    },
    descricao:{
        textAlign:'center',
        marginBottom:20,
    },
    card:{
        backgroundColor:'#fff',
        width:320,
        marginBottom:5,
        padding:10,
        borderRadius:5,
        borderColor:'#979797',
        borderWidth:1,
    },
    titulo2:{
        fontSize:16,
        fontWeight:'bold',
        marginBottom:5
    }
});

export default estilos;
