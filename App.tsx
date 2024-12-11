import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './src/pages/homepage';
import CompraImovel from './src/pages/compraImovel';

/*alterar para tela que vai ser exibida CompraImovel ou HomePage*/
export default function App() {
  return (
      <CompraImovel/> 
  );
}

const styles = StyleSheet.create({
  
});
