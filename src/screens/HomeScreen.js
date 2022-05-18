import { StyleSheet, Text, View,ImageBackground } from 'react-native'
import React from 'react'
import {textColor} from '../../assets/colors.js'
import { height } from '../../assets/constants'
import Input from '../../components/Input'


import Pokeball_main_gradient from '../../assets/images/Pokeball_main_gradient.png'
import commonStyles from '../styles/commonStyles.js'


const HomeScreen = () => {
  return (
    <View >
        <ImageBackground 
        resizeMode='contain'
        style = {{ width: '100%', height: height / 4 }} 
        source = { Pokeball_main_gradient } >
            <Text style = { {...commonStyles.heading, marginTop: 80 } } > Pokédex </Text>
            <Text style = { commonStyles.subHeading } >Search for Pokémon by name or using the National Pokédex number.</Text>
            <View>
              <Input placeholder = 'What Pokémon are you looking for?' />
            </View>
        </ImageBackground>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})