import {Pressable,Image,Text,ScrollView,Switch,TextInput,SafeAreaView,StyleSheet,View,} from 'react-native';
import { useState,useEffect  } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import estilos from '../styles/estilos';
import estiloBotoes from '../styles/estiloBotao';
import * as ImagePicker from 'expo-image-picker';
import {arrReceitas} from '../receitas'
import {configuracao} from './telaConfig'

  var txtDiet = 'Não é diet'
  var txtGlutem = 'Tem glutem'
  var txtVegana = 'Não é vegana'


function TelaAdd({ navigation }) {
  const [nome, setNome] = useState('');
  const [desc, setDesc] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [preparo, setPreparo] = useState('');
  const [imagem, setImage] = useState(null); 
  



  const [diet,setDiet] = useState(false)
  const [glutem,setGlutem] = useState(false)
  const [vegana,setVegana] = useState(false)

const verificaAdd = () =>{
    
    console.log(txtDiet,txtGlutem,txtVegana)
    if(nome  && desc  && ingredientes  && preparo  && imagem  ){
      var adicionar = 
      {
        nome,
        desc,
        ingredientes,
        preparo,
        txtDiet,
        txtGlutem,
        txtVegana,
        imagem
      }
      arrReceitas.push(adicionar)
      console.log(arrReceitas)
      navigation.navigate("Inicial")
    }
  }

  const requestPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Desculpe, precisamos de permissões para acessar a galeria!');
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

 const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaType: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true, 
      quality: 1,          
      base64: true          
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri); 
    }
  };
  
  const trocaValorDiet = () => {
    setDiet(previousState => !previousState)
    if (!diet) {
      txtDiet = 'É diet'
    } else {
      txtDiet = 'Não é diet'
    }
  };
  const trocaValorGlutem = () => {
    setGlutem(previousState => !previousState)
    if (!glutem) {
      txtGlutem = 'Não tem glutem'
    } else {
      txtGlutem = 'Tem glutem diet'
    }
  };
  const trocaValorVegana = () => {
    setVegana(previousState => !previousState)
    if (!vegana) {
      txtVegana = 'É vegana'
    } else {
      txtVegana = 'Não é vegana'
    }
  };
  return (
    <LinearGradient colors={configuracao.cor} style={estilos.container}>
     <ScrollView contentContainer>
      <Pressable
      onPress = {() => navigation.navigate('Inicial')}>
      <Image
        style={estilos.imgVoltar}
        source={require('../assets/iconeVoltar.png')}
        />
      </Pressable>
      <Text style={estilos.textAddReceita}>Crie sua prórpria receita</Text>
      <View style={estilos.containerAddReceita}>
        
        
        <Text style={estilos.textAddReceitaItens}>
          Nome da receita
        </Text>
        <TextInput
          style={estilos.textInputAddReceitaNome}
          placeholder={"Macarrão sem nada"}
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          multiline
          value={nome}
          onChangeText={setNome}
        />


        <Text style={estilos.textAddReceitaItens}>
          Descrição
        </Text>
        <TextInput
          style={estilos.textInputAddReceitaDescricao}
          placeholder={"Macarrão cozido até ficar macio, preparado apenas com água, leve e fácil de apreciar."}
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          multiline
          value={desc}
          onChangeText={setDesc}
        />


        <Text style={estilos.textAddReceitaItens}>
          Ingredientes
        </Text>
        <TextInput
          style={estilos.textInputAddReceitaDescricao}
          placeholder={"1 - Macarrão \n2 - Água"}
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          multiline
          value={ingredientes}
          onChangeText={setIngredientes}
        />
        <Text style={estilos.textAddReceitaItens}>
          Modo de preparo
        </Text>


        <TextInput
          style={estilos.textInputAddReceitaDescricao}
          placeholder= {"1 - Esquente a água \n2 - Coloque o macarrão na água \n3 - Espere 10 minutos \n4 - Retire da água"}
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          value={preparo}
          multiline
          onChangeText={setPreparo}
        />
        <Text style={estilos.textAddReceitaItens}>
          Insira uma imagem para a receita
        </Text>


        <View style={estilos.containerInputPesquisa}>
        <Text style={estilos.textSwitches}>
          Diet
        </Text>
        <Switch
        value={diet} 
        onValueChange={trocaValorDiet} 
        thumbColor={diet ? '#4caf50' : '#f44336'}
        trackColor={{ false: '#767577', true: '#81b0ff' }} 
        />
        <Text style={estilos.textSwitches}>
          Sem glutem
        </Text>
        <Switch
        value={glutem} 
        onValueChange={trocaValorGlutem} 
        thumbColor={glutem ? '#4caf50' : '#f44336'}
        trackColor={{ false: '#767577', true: '#81b0ff' }} 
        />
        <Text style={estilos.textSwitches}>
          Vegana
        </Text>  
        <Switch
        value={vegana} 
        onValueChange={trocaValorVegana} 
        thumbColor={vegana ? '#4caf50' : '#f44336'}
        trackColor={{ false: '#767577', true: '#81b0ff' }} 
        />   
        </View>


        <Pressable 
          style = {estiloBotoes.textBotaoEscolhaImagem}
          onPress={pickImage}>
            <Text style = {estilos.textCadastrese}>Escolha uma imagem</Text> 
          </Pressable>

      {imagem ? (
        <View style = {estilos.viewImgPreview}>
          <Image style = {estilos.imgPreview} source={{ uri: imagem }} />
        </View>
      ) : (
        <Text></Text>
      )}
      <Pressable 
        style = {estiloBotoes.textBotaoEscolhaImagem}
        onPress={verificaAdd}>
            <Text style = {estilos.textCadastrese}>Adicionar ao seu EuComida</Text> 
      </Pressable>
      </View>
      </ScrollView>
    </LinearGradient>
  );
}
export default TelaAdd;
