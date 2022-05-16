import { StyleSheet, Text } from "react-native";
import { textColor } from "../../../assets/colors";

const ApplicationTitle = ({ children }) => {
    return <Text style={styles.text}>{children}</Text>;
};

export default ApplicationTitle;

const styles = StyleSheet.create({
    text: {
        fontFamily: "SFProDisplay-Bold",
        fontSize: 32,
        color: textColor.black,
    },
});
