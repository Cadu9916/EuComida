import {NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TelaLogin from './components/telas/telaLogin.js'
import TelaCadastro from './components/telas/telaCadastro.js'
import TelaInicial from './components/telas/telaInicial'
import TelaAdd from './components/telas/telaAdd'
import TelaConfig from './components/telas/telaConfig'
import TelaAvaliacao from './components/telas/telaAvaliacao'
import TelaReceita from './components/telas/telaReceita'
import TelaPesquisa from './components/telas/telaPesquisa'
import TelaReceitaPesquisa from './components/telas/telaReceitaPesquisa'

const Stack = createNativeStackNavigator();

export default function App() {
 
const tela = 
  <NavigationContainer>
    <Stack.Navigator screenOptions = {{headerShown : false}}>
      <Stack.Screen name = 'Login' component={TelaLogin} />
      <Stack.Screen name = 'Add' component={TelaAdd} />
      <Stack.Screen name = 'Pesquisa' component={TelaPesquisa} />
      <Stack.Screen name = 'ReceitaPesquisa' component={TelaReceitaPesquisa} />
      <Stack.Screen name = 'Inicial' component={TelaInicial} />
      <Stack.Screen name = 'Avaliacao' component={TelaAvaliacao} />
      <Stack.Screen name = 'Config' component={TelaConfig} />
      <Stack.Screen name = 'Receita' component={TelaReceita} />
      <Stack.Screen name = 'Cadastro' component={TelaCadastro} />
    </Stack.Navigator>
  </NavigationContainer>
  return (tela);
}




