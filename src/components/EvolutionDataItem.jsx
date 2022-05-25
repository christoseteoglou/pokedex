import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

//Styles
import * as textStyles from "../../assets/generalStyles/textStyles";
import { textColor, colors } from "../../assets/colors";

//Static files
const BASE_IMAGE_URL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
const BG_IMAGE_URL = require("../../assets/images/Pokeball-fade.png");

const EvolutionDataItem = ({ item: { id, image, title } }) => {
    return (
        <View key={id} style={styles.evolutionContainer}>
            <ImageBackground source={BG_IMAGE_URL} resizeMode="cover">
                <Image
                    style={styles.image}
                    source={{
                        uri: `${BASE_IMAGE_URL}${image}.png`,
                    }}
                />
            </ImageBackground>
            <Text
                style={{
                    ...textStyles.pokemonType,
                    color: textColor.number,
                }}
            >
                #00{id}
            </Text>
            <Text style={textStyles.filterTitle}>{title}</Text>
        </View>
    );
};

export default EvolutionDataItem;

const styles = StyleSheet.create({
    image: {
        height: 75,
        width: 75,
        margin: 10,
    },
    evolutionContainer: {
        flex: 1,
        alignItems: "center",
    },
});
