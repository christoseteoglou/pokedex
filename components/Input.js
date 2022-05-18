import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { customColor } from '../assets/colors'
import commonStyles from '../src/styles/commonStyles'

const Input = ({ ...prop }) => {
  return (
    <View>
      <TextInput style = { styles.input } { ...prop } />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    input: {
        backgroundColor: customColor.input,
    }
})