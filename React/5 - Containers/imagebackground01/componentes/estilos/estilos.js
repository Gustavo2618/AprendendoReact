import { StyleSheet} from 'react-native';

const estilos = StyleSheet.create(
    {
        container:{
            flex:1,
            padding:20,
            justifyContent:'center',
            alignItems:'center'
            
        },
        card:{
          
            padding:10
        },
        titulo:{
            fontSize:20,
            fontWeight:'bold',
            marginBottom:20,
            color:'#fff'
        },
        paragrafo:{
            fontSize:18,
            textAlign:'justify',
            marginBottom:10,
            color:'#fff'
        }
    }
)
export default estilos;