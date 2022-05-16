import { StyleSheet, Text } from "react-native";
import { textColor } from "../../../assets/colors";

const FilterText = ({ children }) => {
    return <Text style={styles.text}>{children}</Text>;
};

export default FilterText;

const styles = StyleSheet.create({
    text: {
        fontFamily: "SFProDisplay-Bold",
        fontSize: 16,
        color: textColor.number,
    },
});
