import { Pressable,Image,Modal,Text,Button,TextInput, SafeAreaView, StyleSheet, View } from 'react-native';
import { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import estilos from '../styles/estilos'
import {users} from './telaCadastro'
import estiloBotoes from '../styles/estiloBotao'
import TelaCadastro from './telaCadastro'

export const usuario = {}
export var indexImg
function TelaLogin({navigation}){
    const [login, setLogin] = useState("")
    const [senha, setSenha] = useState("")
    const [modalVisible, setModalVisible] = useState(false)

  

  const verifLog = () => 
  {
    var arrL = users.length
    for (let i = 0; i < arrL; i++) {
      if (login == users[i][0] && senha == users[i][1]) {
        usuario.login = users[i][0]
        indexImg = i % 3
        navigation.navigate('Inicial')
      }
    }
}
  return(
  
    
      <LinearGradient
      colors={['#B00102', '#e66465']}
      style={estilos.container}>
      <Image
        style={estilos.imgLogin}
        source={require('../assets/EuComidaLogo.png')}
        />

      <View style={estilos.container1}>
      
        <Text style = {estilos.textLoginECadastro}>Login:</Text>

        <TextInput
          style = {estiloBotoes.textDadosUsuario}
          placeholder = "Jão2000"
          value = {login}
          onChangeText = {setLogin}
          />

        <Text style = {estilos.textLoginECadastro}>Senha:</Text>

        <TextInput
          secureTextEntry = {true}
          value = {senha}
          onChangeText = {setSenha}
          style = {estiloBotoes.textDadosUsuario}
          placeholder = "12345"
          />

          
        <View style={estilos.container2}>
          <Text style = {estilos.textCadastrese}>Nao possui cadastro?</Text>     

          <Pressable
          style = {estiloBotoes.textBotaoCadastrese}
          onPress = {() => setModalVisible(true)}>
            <Text style = {estilos.textCadastrese}>Cadastre-se</Text> 
          </Pressable>
          <Modal visible={modalVisible} animationType="slide">
            <TelaCadastro fecharModal={() => setModalVisible(false)}/>
          </Modal>
          </View>
          
          <Pressable 
          style = {estiloBotoes.textBotaoEntrar}
          onPress = {verifLog}
          >
          <Text style = {estilos.textCadastrese}>Entrar</Text> 
          </Pressable>
        </View>
        </LinearGradient>
  );
}
export default TelaLogin