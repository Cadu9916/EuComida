import { Pressable,Image,ScrollView,Text,TextInput, SafeAreaView, StyleSheet, View } from 'react-native';
import { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import estilos from '../styles/estilos'
import estiloBotoes from '../styles/estiloBotao'
import Cartao from '../receitaCartao'
import CartaoUsuario from '../usuarioCartao'
import {users,indexUser} from '../telas/telaCadastro'
import {arrReceitas} from '../receitas'
import {configuracao} from './telaConfig'

export var txtPesquisa
export var arrPesquisaReceita = []
function TelaInicial({navigation}){
      const [pesquisa, setPesquisa] = useState("")

      function achaReceita(){
        tamArr = arrReceitas.length
        tamArrPesq = arrPesquisaReceita.length
        arrPesquisaReceita = arrPesquisaReceita.slice(tamArrPesq)
        for(var i = 0; i < tamArr; i++){
          if(txtPesquisa == arrReceitas[i].nome){
              arrPesquisaReceita.push(arrReceitas[i])
              console.log(arrPesquisaReceita)
          }
        }
      }
  return(
  
    <LinearGradient
    colors={configuracao.cor}
    style={estilos.container}>
    <View>
    <CartaoUsuario
    navigation={navigation || "Sem nome"}/>
    </View>  
      <View style={estilos.containerCabecalho}>
        <Pressable 
        style = {estiloBotoes.textBotaoAdicionar}>
          <Text 
          style = {estilos.textItensInicialAcima}
          onPress = {() => navigation.navigate('Add')}
          >Add</Text> 
        </Pressable>
        <Pressable 
        style = {estiloBotoes.textBotaoAdicionar}
        onPress = {() => navigation.navigate('Config')}>
          <Text style = {estilos.textItensInicialAcima}>Config</Text> 
        </Pressable>
      </View>
      <Text style = {estilos.textTituloInicial}>Receitas Salvas</Text> 
      
      <View style = {estilos.containerInputPesquisa}>
      <TextInput
          style={estilos.textInputPesquisa}
          placeholder={""}
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          multiline
          value={pesquisa}
          onChangeText={setPesquisa}
        />
        <Pressable
        style={estilos.pressablePesquisa}
        onPress = {() => {txtPesquisa = pesquisa,achaReceita(),navigation.navigate('Pesquisa')}}>
        <Image
          style={estilos.imgLupa}
          source={require('../assets/lupa.png')}
          />
      </Pressable>
      </View>
      <ScrollView contentContainer>
      
      {arrReceitas.map((receita, index) => (
        
        <Cartao 
          key={index} 
          nome={receita.nome || "Sem nome"} 
          desc={receita.desc || "Sem descrição disponível"}
          imagem = {receita.imagem} 
          index = {index}
          navigation={navigation}
          pesquisa = {false}
        />
      ))}
    </ScrollView>
      
    </LinearGradient>
  );
}
export default TelaInicial


