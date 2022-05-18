import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import * as textStyles from "../../assets/generalStyles/textStyles";
import { textColor, colors } from "../../assets/colors";

/* This component needs to receive both children and prop for what Badges to create */

const Badges = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={require("../../assets/Icons/types/bugWhite.png")}
                />
                <Text
                    style={{
                        ...textStyles.pokemonType,
                        color: textColor.white,
                    }}
                >
                    Grass
                </Text>
            </View>
        </View>
    );
};

export default Badges;

const styles = StyleSheet.create({
    wrapper: {
        alignItems: "flexstart",
        flexDirection: "row",
    },
    container: {
        alignItems: "flexstart",
        flexDirection: "row",
        padding: 5,
        backgroundColor: colors.grass,
        borderRadius: 3,
        marginRight: 5,
    },
    image: {
        padding: 5,
        height: 15,
        width: 15,
        marginRight: 5,
    },
});
