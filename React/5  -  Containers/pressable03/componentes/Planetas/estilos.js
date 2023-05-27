import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container:{
        flex:1,
        alignContent:"center",
        alignItems:'center',
        justifyContent:"center",
        backgroundColor:'#121212',
        padding:20,
    },
    titulo:{
        color:'#cf9556',
        width:300,
        fontSize:26,
        fontWeight: 'bold',
        marginBottom:10,
    },
    texto:{
        marginBottom:10,
        color:'#b2b2b2',
        fontSize:16,
        textAlign:'justify'
    },
    image:{
        marginTop:10,
        width:360,
        height:200,
        borderRadius:10,
        marginBottom:40,
    },
    btnPressable:{
        alignItems:'center',
        justifyContent:'center',
        flexDirection: "row",
        borderRadius:25,
        backgroundColor:'#cf9556',
        paddingVertical:5,
        width:200,
        marginBottom:10,
    },
    iconbtnPressable:{
        width:25,
        height:25,
    },
    textPressable:{
        backgroundColor:'#cf9556',
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:25,
    },
    container1:{
        alignItems:'center'
    },

})

export default estilos;