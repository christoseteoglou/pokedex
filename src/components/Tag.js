import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, textColor } from "../../assets/colors";
import Icons from "./Icons";
import commonStyles from "../styles/commonStyles";
import * as textStyles from '../../assets/generalStyles/textStyles'

const Tag = ({ type }) => {
    return (
        <View style={{ ...styles.tag, backgroundColor: colors[type] }}>
            <Icons
                style={{ paddingHorizontal: 0 }}
                name={type}
                width={15}
                height={15}
            />
            <Text
                style={{
                    ...textStyles.pokemonType,
                    color: textColor.white,
                    marginLeft: 4,
                    textTransform: "capitalize",
                }}
            >
                
                {type}
            </Text>
        </View>
    );
};

export default Tag;

const styles = StyleSheet.create({
    tag: {
        borderRadius: 3,
        marginRight: 5,
        padding: 5,
        marginTop: 2,
        ...commonStyles.row,
    },
});
