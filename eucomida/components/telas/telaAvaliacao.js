import {Pressable,Alert,Image,Text,Button,TextInput,SafeAreaView,StyleSheet,View,} from 'react-native';
import { useState} from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import estilos from '../styles/estilos';
import estiloBotoes from '../styles/estiloBotao';
import {configuracao} from './telaConfig'
import {CheckBox} from 'react-native-elements'
import CartaoUsuario from '../usuarioCartao'





function TelaAvaliacao({ navigation }) {
const [mtoBom,setMtoBom] = useState(false)
const [bom,setBom] = useState(false)
const [ok,setOk] = useState(false)
const [abaixo,setAbaixo] = useState(false)
const [ruim,setRuim] = useState(false)
const [envio,setEnvio] = useState()


const alertaAvaliacao = () => {
    Alert.alert(
      "Muito Obrigado!!",
      "Esta avaliação será de grande ajuda para melhorarmos o EuComida",
      [
        { text: "OK", onPress: () => navigation.navigate('Config') }
      ],
      { cancelable: false }
    );
    navigation.navigate('Config')
  };

  return (
    <LinearGradient colors={configuracao.cor} style={estilos.container}>
    <Pressable
      onPress = {() => navigation.navigate('Config')}>
      <Image
        style={estilos.imgVoltar}
        source={require('../assets/iconeVoltar.png')}
        />
      </Pressable>
      <CartaoUsuario
    navigation={navigation || "Sem nome"} />
    <Text style={estilos.textAddReceita}>Nos dê sua opinião sobre o EuComida</Text>
      <View style={estilos.containerCheckbox}>
        <CheckBox
          title = 'Muito bom!!'
          checked = {mtoBom}
          onPress = {() => setMtoBom(!mtoBom)} // Alterna com o ternário}
          containerStyle = {{backgroundColor : "#109c0b"}}
          checkedColor = {'#fff'}
          textStyle  = {{color: '#fff'}}
          size = {25}
          disabled = {ruim || bom || ok || abaixo ?true:false}
        />
        <CheckBox
          title = 'Bom!'
          checked = {bom}
          onPress = {() => setBom(!bom)}
          containerStyle = {{backgroundColor : "#629c0b"}}
          checkedColor = {'#fff'}
          textStyle  = {{color: '#fff'}}
          size = {25}
          disabled = {mtoBom || ruim || ok || abaixo ?true:false}
        />
        <CheckBox
          title = 'Ok'
          checked = {ok}
          onPress = {() => setOk(!ok)}
          containerStyle = {{backgroundColor : "#9c950b"}}
          checkedColor = {'#fff'}
          textStyle  = {{color: '#fff'}}
          size = {25}
          disabled = {mtoBom || bom || ruim || abaixo ?true:false}
        />
        <CheckBox
          title = 'Abaixo da média'
          checked = {abaixo}
          onPress = {() => setAbaixo(!abaixo)}
          containerStyle = {{backgroundColor : "#d18a0f"}}
          checkedColor = {'#fff'}
          textStyle  = {{color: '#fff'}}
          size = {25}
          disabled = {mtoBom || bom || ok || ruim ?true:false}
        />
        <CheckBox
          title = 'Ruim'
          checked = {ruim}
          onPress = {() => setRuim(!ruim)}
          containerStyle = {{backgroundColor : "#e83410"}}
          checkedColor = {'#fff'}
          textStyle  = {{color: '#fff'}}
          size = {25}
          disabled = {mtoBom || bom || ok || abaixo ?true:false}
        />
        <Text style={estilos.textAddReceitaItens}>
          Deixe algum comentario abaixo!!
        </Text>
        <TextInput
          style={estilos.textInputAddReceitaDescricao}
          placeholder= {"Amei!!!"}
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          value={envio}
          multiline
          onChangeText={setEnvio}
        />
        <Pressable 
          style = {estiloBotoes.textBotaoEntrar}
          onPress = {() => {alertaAvaliacao()}}
          >
          <Text style = {estilos.textCadastrese}>Enviar avaliacao</Text> 
          </Pressable>
      </View>
    </LinearGradient>
  );
}
export default TelaAvaliacao;




