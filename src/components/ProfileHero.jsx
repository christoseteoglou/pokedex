import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

//Styles
import * as textStyles from "../../assets/generalStyles/textStyles";
import { textColor, colors } from "../../assets/colors";
import commonStyles from "../styles/commonStyles";

//Components
import Tag from "./Tag";

const ProfileHero = () => {
    const pokemonImage = {
        uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    };

    const backgroundImage = require("../../assets/images/circleFade.png");
    return (
        <View style={{ ...styles.wrapper }}>
            <ImageBackground source={backgroundImage} resizeMode="cover">
                <Image style={styles.image} source={pokemonImage} />
            </ImageBackground>
            <View style={{ marginLeft: 25 }}>
                <Text
                    style={{
                        ...textStyles.filterTitle,
                        color: textColor.number,
                    }}
                >
                    #001
                </Text>
                <Text
                    style={{
                        ...textStyles.applicationTitle,
                        color: textColor.white,
                        marginBottom: 5,
                    }}
                >
                    Bulbasaur
                </Text>
                <View style={commonStyles.row}>
                    <Tag type="grass" />
                    <Tag type="poison" />
                </View>
            </View>
        </View>
    );
};

export default ProfileHero;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: "#8BBE8A",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    container: {},
    image: {
        height: 125,
        width: 125,
    },
});
