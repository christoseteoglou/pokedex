import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

//Styles
import * as textStyles from "../../assets/generalStyles/textStyles";
import { textColor, colors } from "../../assets/colors";
import EvolutionDataRow from "./EvolutionDataRow";

const data = [
    {
        id: 1,
        level: 16,
        evolution: [
            {
                id: 1,
                image: 1,
                title: "bulbasaur",
            },
            {
                id: 2,
                image: 2,
                title: "Ivysaur",
            },
        ],
    },
    {
        id: 2,
        level: 32,
        evolution: [
            {
                id: 2,
                image: 2,
                title: "Ivysaur",
            },
            {
                id: 3,
                image: 3,
                title: "Venusaur",
            },
        ],
    },
];

const EvolutionData = () => {
    return (
        <View style={{ ...styles.wrapper }}>
            <Text style={{ ...textStyles.filterTitle, color: "#8BBE8A" }}>
                Evolution Chart
            </Text>
            {data.map((data) => {
                return (
                    <EvolutionDataRow
                        key={data.id}
                        level={data.level}
                        data={data.evolution}
                    />
                );
            })}
        </View>
    );
};

export default EvolutionData;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: "white",
        flexDirection: "column",
    },
});
