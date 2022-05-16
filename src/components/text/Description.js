import { StyleSheet, Text } from "react-native";
import { textColor } from "../../../assets/colors";

const Description = ({ children }) => {
    return <Text style={styles.text}>{children}</Text>;
};

export default Description;

const styles = StyleSheet.create({
    text: {
        fontFamily: "SFProDisplay-Regular",
        fontSize: 16,
        color: textColor.grey,
    },
});
