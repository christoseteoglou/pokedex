import React, {useState} from "react";
import { View } from "react-native";
import { TextInput } from "react-native";
import { textColor } from "../../assets/colors";

const Input = ({ inputValue, handleInput }) => {

    
    return (
        <View>
            <TextInput 
            placeholderTextColor={textColor.grey}
            placeholder="What Pokémon are you looking for?"
            onChangeText = {handleInput}
            onSubmitEditing = {() => {
                handleInput('')
            }}
            value = {inputValue}
            autoCapitalize='none'
            keyboardAppearance='dark'
            autoCorrect={false}
            />
        </View>
    );
};

export default Input;
