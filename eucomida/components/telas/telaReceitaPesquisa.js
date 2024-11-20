import {Pressable,ScrollView, Image,Text,Button,TextInput,SafeAreaView,StyleSheet,View,} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import estilos from '../styles/estilos';
import {arrPesquisaReceita} from './telaInicial'
import {configuracao} from './telaConfig'
import {arrReceitasPesquisaIndexAtual} from '../receitaCartao'

function TelaReceitaPesquisa({ navigation }) {
  return (
    <LinearGradient colors={configuracao.cor} style={estilos.container}>
    <Pressable
      onPress = {() => navigation.navigate('Pesquisa')}>
      <Image
        style={estilos.imgVoltar}
        source={require('../assets/iconeVoltar.png')}
        />
      </Pressable>
    <ScrollView contentContainer>
      <View style={estilos.containerReceitaExpandida}>
        <Text style={estilos.textTituloReceita}>
          {arrPesquisaReceita[arrReceitasPesquisaIndexAtual].nome}
        </Text>
        <Image
        style={estilos.imgReceita}
        source={{ uri: arrPesquisaReceita[arrReceitasPesquisaIndexAtual].imagem }}
        />
        <Text style={estilos.textAddReceitaItens}>
          Descrição
        </Text>
        <Text style={estilos.textReceitaItens}>
          {arrPesquisaReceita[arrReceitasPesquisaIndexAtual].desc}
        </Text>
        
        <Text style={estilos.textAddReceitaItens}>
          Ingredientes
        </Text>
        <Text style={estilos.textReceitaItens}>
          {arrPesquisaReceita[arrReceitasPesquisaIndexAtual].ingredientes}
        </Text>
        <Text style={estilos.textAddReceitaItens}>
          Modo de preparo
        </Text>
        <Text style={estilos.textReceitaItens}>
          {arrPesquisaReceita[arrReceitasPesquisaIndexAtual].preparo}
        </Text>

        <Text style={estilos.textAddReceitaItens}>
          Caracteristicas
        </Text>
        <View style={estilos.containerCaracteristicasReceita}>
        <Text style={estilos.textReceitaItens}>
          {arrPesquisaReceita[arrReceitasPesquisaIndexAtual].txtDiet}
        </Text>
        <Text style={estilos.textReceitaItens}>
          {arrPesquisaReceita[arrReceitasPesquisaIndexAtual].txtGlutem}
        </Text>
        <Text style={estilos.textReceitaItens}>
          {arrPesquisaReceita[arrReceitasPesquisaIndexAtual].txtVegana}
        </Text>
        </View>

        
      </View>
      
    </ScrollView>
      
    </LinearGradient>
  );
}
export default TelaReceitaPesquisa;
