import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

//Styles
import * as textStyles from "../../assets/generalStyles/textStyles";
import { textColor, colors } from "../../assets/colors";

//Components
import Badges from "./Badges";

const ProfileHero = () => {
    const pokemonImage = {
        uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    };
    return (
        <View style={{ ...styles.wrapper }}>
            <Image style={styles.image} source={pokemonImage} />
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
                <View style={{ flexDirection: "row" }}>
                    <Badges />
                    <Badges />
                </View>
            </View>
        </View>
    );
};

export default ProfileHero;

const styles = StyleSheet.create({
    wrapper: {
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
