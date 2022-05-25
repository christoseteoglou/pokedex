import React from "react";
import { StyleSheet, View, Text } from "react-native";

//Styles
import * as textStyles from "../../assets/generalStyles/textStyles";
import { textColor, colors } from "../../assets/colors";

const StatsData = () => {
    return (
        <>
            <View>
                <Text style={styles.dataTitle}>Base Stats</Text>
                <View style={styles.tableRow}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.dataKey}>HP</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.dataValue}>45</Text>
                    </View>
                    <View style={{ flex: 3, ...styles.statusBarWrapper }}>
                        <View
                            style={{ ...styles.statusbar, width: "45%" }}
                        ></View>
                    </View>
                    <View style={{ flex: 2, flexDirection: "row" }}>
                        <Text style={{ flex: 1, ...styles.dataValue }}>
                            200
                        </Text>
                        <Text style={{ flex: 1, ...styles.dataValue }}>
                            294
                        </Text>
                    </View>
                </View>

                <View style={styles.tableRow}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.dataKey}>Attack</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.dataValue}>49</Text>
                    </View>
                    <View style={{ flex: 3, ...styles.statusBarWrapper }}>
                        <View
                            style={{ ...styles.statusbar, width: "60%" }}
                        ></View>
                    </View>
                    <View style={{ flex: 2, flexDirection: "row" }}>
                        <Text style={{ flex: 1, ...styles.dataValue }}>92</Text>
                        <Text style={{ flex: 1, ...styles.dataValue }}>
                            216
                        </Text>
                    </View>
                </View>

                <View style={styles.tableRow}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.dataKey}>Defense</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.dataValue}>49</Text>
                    </View>
                    <View style={{ flex: 3, ...styles.statusBarWrapper }}>
                        <View
                            style={{ ...styles.statusbar, width: "60%" }}
                        ></View>
                    </View>
                    <View style={{ flex: 2, flexDirection: "row" }}>
                        <Text style={{ flex: 1, ...styles.dataValue }}>92</Text>
                        <Text style={{ flex: 1, ...styles.dataValue }}>
                            216
                        </Text>
                    </View>
                </View>

                <View style={styles.tableRow}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.dataKey}>Total</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.dataValue}>143</Text>
                    </View>
                    <View style={{ flex: 3, ...styles.statusBarWrapper }} />
                    <View style={{ flex: 2, ...styles.minMaxWrapper }}>
                        <Text style={{ flex: 1, ...styles.minMax }}>Min</Text>
                        <Text style={{ flex: 1, ...styles.minMax }}>Max</Text>
                    </View>
                </View>
            </View>

            <Text style={styles.descriptionSmall}>
                The ranges shown on the right are for a level 100 Pokémon.
                Maximum values are based on a beneficial nature, 252 EVs, 31
                IVs; minimum values are based on a hindering nature, 0 EVs, 0
                IVs.
            </Text>

            <Text style={styles.dataTitle}>Type Defenses</Text>

            <Text style={styles.description}>
                The effectiveness of each type on Bulbasaur.
            </Text>
        </>
    );
};

export default StatsData;

const styles = StyleSheet.create({
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
        textAlign: "right",
    },
    statusBarWrapper: { paddingHorizontal: 10 },
    statusbar: {
        backgroundColor: colors.grass,
        height: 4,
        borderRadius: "100%",
    },
    minMaxWrapper: {
        flexDirection: "row",
    },
    minMax: {
        ...textStyles.pokemonType,
        textAlign: "right",
    },
    descriptionSmall: {
        ...textStyles.pokemonType,
        color: textColor.grey,
        marginBottom: 30,
    },
    description: {
        ...textStyles.description,
        color: textColor.grey,
        marginBottom: 30,
    },
});
