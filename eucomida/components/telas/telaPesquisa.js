import { Pressable,Image,ScrollView,Text,TextInput, SafeAreaView, StyleSheet, View } from 'react-native';
import { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import {NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import estilos from '../styles/estilos'
import estiloBotoes from '../styles/estiloBotao'
import Cartao from '../receitaCartao'
import CartaoUsuario from '../usuarioCartao'
import {users,indexUser} from '../telas/telaCadastro'
import {arrReceitas} from '../receitas'
import {configuracao} from './telaConfig'
import {txtPesquisa} from './telaInicial'
import {arrPesquisaReceita} from './telaInicial'

function TelaPesquisa({navigation}){
      const [pesquisa, setPesquisa] = useState("")
  return(
  
    <LinearGradient
    colors={configuracao.cor}
    style={estilos.container}>
    <View>
    <CartaoUsuario
    navigation={navigation || "Sem nome"}/>
    </View>  
     <Pressable
      onPress = {() => navigation.navigate('Inicial')}>
      <Image
        style={estilos.imgVoltarPesquisa}
        source={require('../assets/iconeVoltar.png')}
        />
      </Pressable>
      
      <Text style = {estilos.textTituloInicial}>Receitas Salvas</Text> 
      <ScrollView contentContainer>
      {arrPesquisaReceita.map((receita, index) => (
        
        <Cartao 
          key={index} 
          nome={receita.nome || "Sem nome"} 
          desc={receita.desc || "Sem descrição disponível"}
          imagem = {receita.imagem} 
          index = {index}
          navigation={navigation}
          pesquisa = {true}
        />
      ))}
    </ScrollView>
      
    </LinearGradient>
  );
}
export default TelaPesquisa


