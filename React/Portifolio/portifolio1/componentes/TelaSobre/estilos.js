import { StyleSheet } from "react-native";

const estilos = StyleSheet.create(
    {
        container:{
            flex:1,
            padding:10,
            alignItems:"center",
            justifyContent:"center",
            backgroundColor:'#209000',
        },
        card:{
            backgroundColor:'#fff',
            borderRadius:20,
            padding:10,
            alignItems:'center',
            borderWidth:5,
        },
        titulo:{
            fontSize:20,
            fontWeight:"bold",
            marginBottom:5
        },
        descricao:{
            fontSize:16,
            marginBottom:5,
        },
        contato:{
            fontSize:16,
            marginBottom:5,
            fontWeight:"bold"
        },
        img:{
            width:100,
            height:100,
            borderRadius:100,
            padding:10,
            
        },
        
    }
)



export default estilos;