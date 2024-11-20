import { Pressable,Image,Text,TextInput, SafeAreaView, StyleSheet, View } from 'react-native';
import { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import estilos from '../styles/estilos'
import estiloBotoes from '../styles/estiloBotao'

export var users = [["Joao", "abc1r1"], ["Jose", "fy63u*"], ["MaLu", "th678"], ["Luck", "lsji48se"], ["Hansol", "stwr478"]];

let arrL = users.length

function TelaCadastro({fecharModal}){
  const [login, setLogin] = useState("")
  const [senha, setSenha] = useState("")
  const [senhaConfirma, setSenhaConfirma] = useState("")

  const verificaCadastro = () =>{
    
    if(senha == senhaConfirma ){
      var cadastr = [login,senha]
      users.push(cadastr)
      console.log("Cadastrou")
      fecharModal()
    }
  }
  return(
  
     <LinearGradient
      colors={['#B00102', '#e66465']}
      style={estilos.container}>
      <Pressable
      onPress = {() => fecharModal()}>
      <Image
        style={estilos.imgVoltar}
        source={require('../assets/iconeVoltar.png')}
        />
      </Pressable>
      <Image
        style={estilos.imgCadastro}
        source={require('../assets/EuComidaLogo.png')}
        />
      <View style={estilos.container1}>
        <Text style = {estilos.textLoginECadastro}>Usuario:</Text>

        <TextInput
          style = {estiloBotoes.textDadosUsuario}
          placeholder = "Jão2000"
          value = {login}
          onChangeText = {setLogin}
          />

        <Text style = {estilos.textLoginECadastro}>Senha:</Text>

        <TextInput
          value = {senha}
          onChangeText = {setSenha}
          style = {estiloBotoes.textDadosUsuario}
          placeholder = "12345"
          />

        <Text style = {estilos.textLoginECadastro}>Confirma:</Text>

          <TextInput
          value = {senhaConfirma}
          onChangeText = {setSenhaConfirma}
          style = {estiloBotoes.textDadosUsuario}
          placeholder = "12345"
          />
          
          <Pressable 
          style = {estiloBotoes.textBotaoEntrar}
          onPress = {verificaCadastro}>
            <Text style = {estilos.textCadastrese}>Cadastrar</Text> 
          </Pressable>
        </View>
    </LinearGradient>
  );
}

export default TelaCadastro




