import React from 'react';
import {  View, Button } from 'react-native';

export default function App() {
  return (
    <View >
        <Button title='Abrir Menu'
        onPress={()=>{ console.log("O botão foi tocado!")} }>
        </Button>
    </View>
  );
}

