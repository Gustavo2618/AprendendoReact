import { StyleSheet } from "react-native";

const estilosConteudo = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        paddingVertical:10,
        backgroundColor: '#fff'

    },

    titulo:{
        fontSize: 22,
        fontWeight: 'bold',


    },
     subtitulo:{
        fontWeight:'bold',
        marginBottom:10

     },
     paragrafo:{
        marginBottom:6,

     },
      img:{
        width:250,
        height:100,
        marginTop:10,
      }


});

export default estilosConteudo;