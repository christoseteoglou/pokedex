import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";

//Styles
import * as textStyles from "../../assets/generalStyles/textStyles";
import { textColor, colors } from "../../assets/colors";

const ProfileTabNavigation = ({ activeTab, handleActiveTab }) => {
    return (
        <>
            <Pressable
                onPressOut={() => handleActiveTab("About")}
                style={styles.navigationTabWrapper}
            >
                <Text
                    style={
                        activeTab === "About"
                            ? styles.navigationTabActive
                            : styles.navigationTab
                    }
                >
                    About
                </Text>
            </Pressable>
            <Pressable
                onPressOut={() => handleActiveTab("Stats")}
                style={styles.navigationTabWrapper}
            >
                <Text
                    style={
                        activeTab === "Stats"
                            ? styles.navigationTabActive
                            : styles.navigationTab
                    }
                >
                    Stats
                </Text>
            </Pressable>
            <Pressable
                onPressOut={() => handleActiveTab("Evolution")}
                style={{ ...styles.navigationTabWrapper, flex: 1.2 }}
            >
                <Text
                    style={
                        activeTab === "Evolution"
                            ? styles.navigationTabActive
                            : styles.navigationTab
                    }
                >
                    Evolution
                </Text>
            </Pressable>
        </>
    );
};

export default ProfileTabNavigation;

const styles = StyleSheet.create({
    navigationTabWrapper: {
        flex: 1,
        alignItems: "center",
    },
    navigationTabActive: {
        ...textStyles.filterTitle,
        color: textColor.white,
    },
    navigationTab: {
        ...textStyles.description,
        color: textColor.white,
    },
});
