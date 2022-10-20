import { StyleSheet } from "react-native";

const estilosCard = StyleSheet.create({
    container:{
        alignItems: 'center',
        backgroundColor:'#0a1c35',
        paddingVertical:20,
    },
    img:{
        width:300,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        //borderRadius:10

    },
    titulo:{
        marginTop:10,
     
        fontSize: 22,
 
    },
    texto:{
        margin:10,
    },
    box:{
        backgroundColor: '#fff',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius:10,
        width:300

    }


});
export default estilosCard;
