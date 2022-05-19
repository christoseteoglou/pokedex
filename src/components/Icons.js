import { StyleSheet, Pressable } from 'react-native'
import React from 'react'


import { Grass, Dark, Fire, Dragon } from '../components/iconSet'
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