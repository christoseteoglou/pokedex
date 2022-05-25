import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React from 'react'
import { backgroundColors } from '../assets/colors'
import commonStyles from '../src/styles/commonStyles'
import Tag from './Tag'
import Pokeball_card from '../assets/images/Pokeball_card.png'

const Card = ({ item }) => {
    /* console.warn({ item }) */

    let type = 'grass';

    if (item > 3)
    {
        type ='fire'
    }

  return (
    <View style = {{ ...styles.card, backgroundColor: backgroundColors[type] }} >
      <View>
          <Text style = { commonStyles.number } >#001</Text>
          <Text style = { commonStyles.title } >Bulbasaur</Text>
          <View style = { commonStyles.row } >
        <Tag type = { type } />
        <Tag type = 'poison'/>
          </View>
      </View> 
      <View style = {styles.imageContainer} >
        <ImageBackground 
        resizeMode = 'contain'
        source = { Pokeball_card } 
        style = { styles.imageBackground } >
      <Image 
      style = {styles.image}
      source = {{ uri:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item}.png` }} />
        </ImageBackground>  
      </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    card: {
        marginVertical: 12,
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',


    },
    imageContainer: {
        position: 'absolute',
        right: 0,
        top: -25,
    },
    imageBackground: {
        width: 130,
        height: 130,
    },
    image: {
        width: 130,
        height: 130,
    }
})