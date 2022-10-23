import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style  = {texto.container3}>
      <Text style = {texto.container} >Hello World!</Text>
      <Text style = {texto.container2} >Hello World!</Text>
    </View>
  );
}

const texto = StyleSheet.create({
  container: {
    marginTop: 20,
    fontSize: 30,
    backgroundColor: 'white',

  },
  container2: {
    marginTop: 100,
    fontSize: 50,
    color: 'red',
    backgroundColor: 'lightblue',
    //flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start'

  },
  container3: {
    marginTop: 100,
    fontSize: 50,
    color: 'red',
    backgroundColor: 'lightblue',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start'

  },
});
