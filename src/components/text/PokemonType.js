import { StyleSheet, Text } from "react-native";
import { textColor } from "../../../assets/colors";

const PokemonType = ({ children }) => {
    return <Text style={styles.text}>{children}</Text>;
};

export default PokemonType;

const styles = StyleSheet.create({
    text: {
        fontFamily: "SFProDisplay-Medium",
        fontSize: 12,
        color: textColor.black,
    },
});
