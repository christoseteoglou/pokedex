import { StyleSheet } from "react-native";
import { textColor } from "../../assets/colors";


export default StyleSheet.create({
    container : {
        padding: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: "center"
    },
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
    title: {
        fontSize: 26,
        color: textColor.white,
        fontFamily: 'SFProDisplay-Bold',
    },
    number: {
        fontSize: 12,
        color: textColor.number,
        fontFamily: 'SFProDisplay-Bold',
    }
})