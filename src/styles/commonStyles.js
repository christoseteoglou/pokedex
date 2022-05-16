import { StyleSheet } from "react-native";
import { textColor } from "../../assets/colors";


export default StyleSheet.create({
    heading: {
        fontFamily: 'SFProDisplay-Bold',
        fontSize: 32,
        fontWeight: '700',
        color: textColor.black,
    },
    subHeading: {
        fontFamily: 'SFProDisplay-Regular',
        fontSize: 16,
        color: textColor.grey
    },
})