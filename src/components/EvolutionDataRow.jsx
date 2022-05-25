import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

//Styles
import * as textStyles from "../../assets/generalStyles/textStyles";
import { textColor, colors } from "../../assets/colors";
import EvolutionDataItem from "./EvolutionDataItem";

const BASE_IMAGE_URL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

const BG_IMAGE_URL = require("../../assets/images/Pokeball-fade.png");

const EvolutionDataRow = ({ level, data }) => {
    return (
        <View style={styles.evolutionRow}>
            {data &&
                data.map((item, index) => {
                    const stop = data.length - 1;
                    return (
                        <>
                            <EvolutionDataItem key={item.id} item={item} />
                            {stop !== index && (
                                <View style={styles.evolutionLevel}>
                                    <Text style={textStyles.pokemonNumber}>
                                        {`(Level ${level})`}
                                    </Text>
                                </View>
                            )}
                        </>
                    );
                })}
        </View>
    );
};

export default EvolutionDataRow;

const styles = StyleSheet.create({
    evolutionRow: {
        display: "flex",
        flexDirection: "row",
        marginVertical: 20,
    },
    evolutionLevel: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
