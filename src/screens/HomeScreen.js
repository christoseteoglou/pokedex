import { StyleSheet, Text, View, ImageBackground, FlatList } from "react-native";
import React from "react";
import { height } from "../../assets/constants";
import Input from "../../components/Input";

import Pokeball_main_gradient from "../../assets/images/Pokeball_main_gradient.png";
import commonStyles from "../styles/commonStyles.js";
import { backgroundColors, customColor, textColor } from "../../assets/colors";
import { Generation, Sort, Filter, Search } from '../components/iconSet'
import Icons from "../components/Icons";
import Card from "../../components/Card";

const HomeScreen = () => {
    const pokemons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
    return (
        <>
            <ImageBackground
           resizeMode="contain"
                style={{ width: "100%", height: height / 4 }}
                source={Pokeball_main_gradient}
            >
            <View style = { commonStyles.container }>
                    <View style = {{ ...commonStyles.row, justifyContent: 'flex-end', marginVertical:10}} >
                        <Icons>
                            <Generation color = { textColor.black } />
                        </Icons>
                        <Icons>
                            <Sort color = { textColor.black }/>
                        </Icons>
                        <Icons>
                            <Filter style={styles.image} />
                        </Icons>
                    </View>
                        <Text style={{ ...commonStyles.heading}}>
                            Pokédex
                        </Text>
                        <Text style={{...commonStyles.subHeading}}>
                            Search for Pokémon by name or using the National Pokédex
                            number.
                        </Text>
                    <View style = { styles.searchContainer } >
                        <Icons>
                            <Search color = { textColor.grey } />
                        </Icons>
                        <Input 
                        placeholderTextColor={textColor.grey} 
                        placeholder="What Pokémon are you looking for?" />
                    </View>
            </View>
            </ImageBackground>     
            <View style = {{ ...commonStyles.container, paddingBottom: 0, marginTop: 10, flex: 3 }} >
                <FlatList
                contentContainerStyle = {{ paddingBottom: 20 }}
                showsVerticalScrollIndicator = { false}  
                data = {pokemons}
                renderItem = {({item}) => <Card item = {item} /> }
                />
            </View>
        </>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    searchContainer: {
        ...commonStyles.row,
        marginVertical: 15,
        backgroundColor: customColor.input,
        borderRadius: 10,
        paddingLeft: 15,
        width: 334,
        height: 60,
    },
    container: {
        display: "flex",
        flexDirection: 'row',
        marginTop: '10%',
        justifyContent: "flex-end",
    },
    input: {
        backgroundColor: customColor.input,
        borderRadius: 10,
        width: 334,
        height: 60,
    },
});
