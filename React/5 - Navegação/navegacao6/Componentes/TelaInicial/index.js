import React from "react";
import { Text, View , Button} from "react-native";
import estilos from "../Estilos/estilos";


export default function TelaInicial(props){

    return(

        <View style={estilos.container}>

            <Text style={estilos.texto}>Tela Incial</Text>
            <Button title="Abrir Menu" onPress={()=>{props.navigation.openDrawer()}}>
                
            </Button>
        </View>
    );
}