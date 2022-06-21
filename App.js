import React, { useCallback, useEffect, useState, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

// Styles
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

// Components
import ProfileScreen from "./src/screens/ProfileScreen.jsx";
import HomeScreen from "./src/screens/HomeScreen.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Custom Fonts
const customFonts = {
    "SFProDisplay-Bold": require("./assets/fonts/SFProDisplay-Bold.otf"),
    "SFProDisplay-Medium": require("./assets/fonts/SFProDisplay-Medium.otf"),
    "SFProDisplay-Regular": require("./assets/fonts/SFProDisplay-Regular.otf"),
};


const Stack = createNativeStackNavigator();


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
        <>
            {/* <SafeAreaView style={{ flex: 1 }}> */}
            <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen
                            name='Home'
                            component={HomeScreen}
                            options={{
                                header: () => null,
                            }}
                        />
                        <Stack.Screen
                            name='Profile'
                            component={ProfileScreen}
                            options={{
                                header: () => null,
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </View>
            {/* </SafeAreaView> */}
        </>
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
