import {View} from 'react-native'
import estilos from './styles/estilos'

function Quadrado(props){
  return(
      <View style = {[estilos.quad,{backgroundColor:props.cor}]}></View>
  )
}

export default Quadrado