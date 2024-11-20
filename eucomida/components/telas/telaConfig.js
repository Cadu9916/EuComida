import { Pressable,Image,ScrollView,Text,TextInput, SafeAreaView, StyleSheet, View } from 'react-native';
import { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import estilos from '../styles/estilos'
import estiloBotoes from '../styles/estiloBotao'
import CartaoUsuario from '../usuarioCartao'
import Quadrado from '../quadrado'




export const configuracao = 
{
  cor: ['#B00102', '#e66465']
}



function TelaConfig({navigation}){
  const [padrao, setPadrao] = useState(['#B00102', '#e66465']);

  function corDeFundo(index) {
    const novoPadrao = padrao.slice(2).concat([fundos[index].escuro, fundos[index].claro]);
    configuracao.cor = novoPadrao
    setPadrao(novoPadrao);
  }
  return(
  
    <LinearGradient
    colors={configuracao.cor}
    style={estilos.container}>
    <View>
    <CartaoUsuario
    navigation={navigation || "Sem nome"} />
    </View>  
      <View style={estilos.containerCabecalho}>
        <Pressable 
        style = {estiloBotoes.textBotaoAdicionar}>
          <Text 
          style = {estilos.textItensInicialAcima}
          onPress = {() => navigation.navigate('Inicial')}
          >Voltar</Text> 
        </Pressable>
      </View>
      <View style = {estilos.containerConfigs}>
        <Text style = {estilos.textTituloInicial}>Configurações</Text> 
        <Text style = {estilos.textItensConfig}>Escolha a cor de fundo de fundo do seu EuComida</Text>
        <View style = {estilos.containerCores}>
          <Pressable
          onPress = {() => {corDeFundo(0,padrao)}}>
          <Quadrado cor = "#06015e"/>
        </Pressable>
        <Pressable
          onPress = {() => {corDeFundo(1,padrao)}}>
          <Quadrado cor = "#B00102"/>
        </Pressable>
        <Pressable
          onPress = {() => {corDeFundo(2,padrao)}}>
          <Quadrado cor = "#074000"/>
        </Pressable>
        <Pressable
          onPress = {() => {corDeFundo(3,padrao)}}>
          <Quadrado cor = "#430154"/>
        </Pressable>
        </View>
        <Pressable 
          style = {estiloBotoes.textBotaoEntrar}
          onPress = {() => {navigation.navigate('Avaliacao')}}
          >
          <Text style = {estilos.textCadastrese}>Avalie-nos</Text> 
          </Pressable>
      </View>
      
      
    </LinearGradient>
  );
}
export default TelaConfig


const 
fundos = [
  cores ={
    escuro: '#06015e',
    claro: '#3e34ed',
  },
  cores ={
    escuro: '#B00102',
    claro: '#e66465',
  },
  cores ={
    escuro: '#074000',
    claro: '#53a848',
  },
  cores ={
    escuro: '#430154',
    claro: '#9445a8',
  },
]
