import React from 'react';
import { View,Image,Pressable, Text, StyleSheet } from 'react-native';
import estilos from './styles/estilos'
import estiloBotoes from './styles/estiloBotao'
import {usuario,indexImg} from './telas/telaLogin'
import hamburguer from './assets/hamburguer.png'
import rosquinha from './assets/rosquinha.png'
import pizza from './assets/pizza.png'

const img = ["hamburguer","rosquinha","pizza"]

export default CartaoUsuario = ({navigation}) => {
  return (    
    <View style={estilos.containerUsuario}>
      <Pressable 
      style = {estiloBotoes.textBotaoSair} 
      onPress = {() => navigation.navigate("Login")}>
          <Text style = {estilos.textUsuarioSair}>Sair</Text> 
      </Pressable>
      <Text style={estilos.textNomeUsuario}>{usuario.login}</Text>
      <Image
      style={estilos.imgUser}
      source={require(`./assets/${img[indexImg ?? 1]}.png`)}
      />
    </View>
  );
};


