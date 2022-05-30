import { StyleSheet, Pressable } from 'react-native'
import React from 'react'


import { Grass, Normal, Fire, Dragon,Poison, Bug, Water, Flying, Dark, Electric, Fairy, Fighting, Ghost, Ground, Rock, Steel, Psychic, Ice } from '../components/iconSet'
import { textColor } from '../../assets/colors'


const Icons = ({ children, onPress, name, style, width, height}) => {

  let RenderIcon;
  switch (name) {
    case 'grass':
      RenderIcon = Grass;
      break;
      case 'fire':
      RenderIcon = Fire;
      break;
    case 'dragon':
      RenderIcon = Dragon;
      break;
    case 'poison':
      RenderIcon = Poison;
      break;
    case 'bug':
      RenderIcon = Bug;
      break;
    case 'water':
      RenderIcon = Water;
      break;
    case 'flying':
      RenderIcon = Flying;
      break;
    case 'normal':
      RenderIcon = Normal;
      break;
    case 'electric':
      RenderIcon = Electric;
      break;
    case 'fairy':
      RenderIcon = Fairy;
      break;
    case 'fighting':
      RenderIcon = Fighting;
      break;
    case 'ghost':
      RenderIcon = Ghost;
      break;
    case 'ground':
      RenderIcon = Ground;
      break;
    case 'rock':
      RenderIcon = Rock;
      break;
    case 'steel':
      RenderIcon = Steel;
      break;
    case 'psychic':
      RenderIcon = Psychic;
      break;
    case 'ice':
      RenderIcon = Ice;
      break;
    default:
      RenderIcon = Dark;
  }

  return (
    <Pressable style = {{ ...styles.icon, ...style,}} onPress={onPress}>
      { name ?  (
        <RenderIcon width = { width } height = { height } color = { textColor.white } />
      ) : (
        children
      ) }
    </Pressable>
  )
}

export default Icons

const styles = StyleSheet.create({
    icon: {
        paddingHorizontal: 10,
    }
})