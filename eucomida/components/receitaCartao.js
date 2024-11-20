import React from 'react';
import { View,Pressable,Image, Text, StyleSheet } from 'react-native';
import estilos from './styles/estilos'


export var arrReceitasIndexAtual = 0
export var arrReceitasPesquisaIndexAtual = 0
export default Cartao = ({ nome, desc, imagem,index,navigation,pesquisa}) => {

  function abreReceita(){
      
    if(pesquisa == false){
      console.log("true")
      arrReceitasIndexAtual = index
      navigation.navigate('Receita')
    }
    else{
      console.log("false")
      arrReceitasPesquisaIndexAtual = index
      navigation.navigate('ReceitaPesquisa')
    }
  }
  return (
    
    <View>
    <Pressable 
    style={estilos.containerReceita}
    onPress = {() => {abreReceita()}}>
      <Image
      style={estilos.imgInicial}
      source={{ uri: imagem }}
      />
    
    
        <View style={estilos.container1}>
          <Text style={estilos.textMenuInicial}>{nome}</Text>
          <Text style={estilos.textDescInicial}>{desc}</Text>
        </View>
        </Pressable>
    
    </View>
    
  );
};

