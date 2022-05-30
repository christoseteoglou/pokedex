import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

//Styles
import * as textStyles from "../../assets/generalStyles/textStyles";
import { textColor, colors } from "../../assets/colors";
import commonStyles from "../styles/commonStyles";
import { backgroundColors } from "../../assets/colors";

//Components
import Tag from "./Tag";

const ProfileHero = ({ data }) => {
    /* data = {
        id: data.id,
        image: data.sprites.other["official-artwork"].front_default,
        name: data.name,
        type: data.types[0].type.name,
        types: [...data.types],
    }; */

    const backgroundImage = require("../../assets/images/circleFade.png");
    return (
        <View
            style={{
                ...styles.wrapper,
                backgroundColor: backgroundColors[data.type],
            }}
        >
            <ImageBackground source={backgroundImage} resizeMode="cover">
                <Image style={styles.image} source={{ uri: data.image }} />
            </ImageBackground>
            <View style={{ marginLeft: 25 }}>
                <Text
                    style={{
                        ...textStyles.filterTitle,
                        color: textColor.number,
                    }}
                >
                    {data.id.toString().length == 1
                        ? `#00${data.id}`
                        : data.id.toString().length == 2
                        ? `#0${data.id.toString()}`
                        : `#${data.id}`}
                </Text>
                <Text
                    style={{
                        ...textStyles.applicationTitle,
                        color: textColor.white,
                        marginBottom: 5,
                        textTransform: "capitalize",
                    }}
                >
                    {data.name}
                </Text>
                <View style={commonStyles.row}>
                    {data.types.map((item) => (
                        <Tag key={item.type.name} type={item.type.name} />
                    ))}
                </View>
            </View>
        </View>
    );
};

export default ProfileHero;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
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
