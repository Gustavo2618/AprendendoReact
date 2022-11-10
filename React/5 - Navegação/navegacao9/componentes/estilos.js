import { StyleSheet } from "react-native";

const estilos = StyleSheet.create
({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center', 
        padding:20,
        fontWeight:700
    },
    fundoNode:{
        flex:1,
        backgroundColor:'#84bd48'
    },
    fundoReact:{
        flex:1,
        backgroundColor:'#61dafb'
    },
    fundoJs:{
        flex:1,
        backgroundColor:'#f7df1e',
    },
    img:{
        width:100,
        height:100,
        marginVertical:20,
        backgroundColor:'#fff'
    },
    titulo:{
        fontSize: 26,
        fontWeight:'bold',
        marginBottom:20,
        textAlign:'center',
    }, 
    texto:{
        fontSize: 18,
        textAlign:'center',
        marginBottom:20,
    },
    
    button:{
        width:100,
        height:50,
        
    },
    containerbuttons:{
        flexDirection: 'row',
        width:300,
        justifyContent:'space-around'
    }
})


export default estilos;