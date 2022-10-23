import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{flex :1, backgroundColor: 'darkblue', alignItems: 'center', justifyContent: 'center'}}>
      <Text style= {{fontSize:36, color:'white'}}>Estilizando o aplicativo</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
