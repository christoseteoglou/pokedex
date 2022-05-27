import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { SafeAreaView } from "react-native";
//import ProfileScreen from "./src/screens/ProfileScreen.jsx";
import HomeScreen from "./src/screens/HomeScreen.js";

const customFonts = {
    "SFProDisplay-Bold": require("./assets/fonts/SFProDisplay-Bold.otf"),
    "SFProDisplay-Medium": require("./assets/fonts/SFProDisplay-Medium.otf"),
    "SFProDisplay-Regular": require("./assets/fonts/SFProDisplay-Regular.otf"),
};

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                await SplashScreen.preventAutoHideAsync();
                await Font.loadAsync(customFonts);
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
            }
        }
        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
                <HomeScreen />
                {/* <Text style = {{ color: textColor.black }} > Pokèdex </Text>
                <Text> Developed by: Christos & Carl </Text> */}
                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    text: {
        fontFamily: "SFProDisplay-Bold",
        color: "red",
    },
});
