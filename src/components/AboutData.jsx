import React from "react";
import { StyleSheet, View, Text } from "react-native";

//Styles
import * as textStyles from "../../assets/generalStyles/textStyles";
import { textColor, colors } from "../../assets/colors";

const AboutData = () => {
    return (
        <>
            <Text style={styles.description}>
                Bulbasaur can be seen napping in bright sunlight. There is a
                seed on its back. By soaking up the sun's rays, the seed grows
                progressively larger.
            </Text>
            <View>
                <Text style={styles.dataTitle}>Pokédex Data</Text>
                <View style={styles.tableRow}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.dataKey}>Species</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Text style={styles.dataValue}>Seed Pokémon</Text>
                    </View>
                </View>

                <View style={styles.tableRow}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.dataKey}>Height</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Text style={styles.dataValue}>0.7m (2'04")</Text>
                    </View>
                </View>

                <View style={styles.tableRow}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.dataKey}>Weight</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Text style={styles.dataValue}>6.9kg (15.2lbs)</Text>
                    </View>
                </View>

                <View style={styles.tableRow}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.dataKey}>Abilities</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Text style={styles.dataValue}>1. Overgrow</Text>
                        <Text style={styles.dataValue}>
                            Chlorophyll (hidden ability)
                        </Text>
                    </View>
                </View>

                <Text style={styles.dataTitle}>Training</Text>
                <View style={styles.tableRow}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.dataKey}>EV Yield</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Text style={styles.dataValue}>1 Special Attack</Text>
                    </View>
                </View>

                <View style={styles.tableRow}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.dataKey}>Catch Rate</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Text style={styles.dataValue}>
                            45 (5.9% with PokéBall, full HP)
                        </Text>
                    </View>
                </View>
            </View>
        </>
    );
};

export default AboutData;

const styles = StyleSheet.create({
    description: {
        ...textStyles.description,
        color: textColor.grey,
        marginBottom: 30,
    },
    dataTitle: {
        ...textStyles.filterTitle,
        color: colors.grass,
        marginBottom: 20,
    },
    tableRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    dataKey: {
        ...textStyles.pokemonType,
    },
    dataValue: {
        ...textStyles.description,
        color: textColor.grey,
    },
});
