import React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native";

const Input = ({ ...prop }) => {
    return (
        <View>
            <TextInput {...prop} />
        </View>
    );
};

export default Input;
