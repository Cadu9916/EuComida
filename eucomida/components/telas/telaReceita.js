import {Pressable,ScrollView, Image,Text,Button,TextInput,SafeAreaView,StyleSheet,View,} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import estilos from '../styles/estilos';
import {arrReceitas} from '../receitas'
import {configuracao} from './telaConfig'
import {arrReceitasIndexAtual} from '../receitaCartao'

function TelaReceita({ navigation }) {
  return (
    <LinearGradient colors={configuracao.cor} style={estilos.container}>
    <Pressable
      onPress = {() => navigation.navigate('Inicial')}>
      <Image
        style={estilos.imgVoltar}
        source={require('../assets/iconeVoltar.png')}
        />
      </Pressable>
    <ScrollView contentContainer>
      <View style={estilos.containerReceitaExpandida}>
        <Text style={estilos.textTituloReceita}>
          {arrReceitas[arrReceitasIndexAtual].nome}
        </Text>
        <Image
        style={estilos.imgReceita}
        source={{ uri: arrReceitas[arrReceitasIndexAtual].imagem }}
        />
        <Text style={estilos.textAddReceitaItens}>
          Descrição
        </Text>
        <Text style={estilos.textReceitaItens}>
          {arrReceitas[arrReceitasIndexAtual].desc}
        </Text>
        
        <Text style={estilos.textAddReceitaItens}>
          Ingredientes
        </Text>
        <Text style={estilos.textReceitaItens}>
          {arrReceitas[arrReceitasIndexAtual].ingredientes}
        </Text>
        <Text style={estilos.textAddReceitaItens}>
          Modo de preparo
        </Text>
        <Text style={estilos.textReceitaItens}>
          {arrReceitas[arrReceitasIndexAtual].preparo}
        </Text>
        
        <Text style={estilos.textAddReceitaItens}>
          Caracteristicas
        </Text>
        <View style={estilos.containerCaracteristicasReceita}>
        <Text style={estilos.textReceitaItens}>
          {arrReceitas[arrReceitasIndexAtual].txtDiet}
        </Text>
        <Text style={estilos.textReceitaItens}>
          {arrReceitas[arrReceitasIndexAtual].txtGlutem}
        </Text>
        <Text style={estilos.textReceitaItens}>
          {arrReceitas[arrReceitasIndexAtual].txtVegana}
        </Text>
        </View>

        
      </View>
      
    </ScrollView>
      
    </LinearGradient>
  );
}
export default TelaReceita;
