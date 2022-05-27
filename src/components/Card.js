import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import React from "react";
import { backgroundColors } from "../../assets/colors";
import commonStyles from "../styles/commonStyles";
import Tag from "./Tag";
import Pokeball_card from "../../assets/images/Pokeball_card.png";
import useFetch from "./useFetch";
import * as textStyles from '../../assets/generalStyles/textStyles'
import { textColor } from "../../assets/colors";

const Card = ({ item }) => {
    /* console.warn({ item }) */
    const [{data, loading, error}] = useFetch(item.url)

    
    if (data) console.log('data motherfuckers', data)
    if (loading) console.log('Loading Motherfuckerz')
    if (error) console.log('error motherfuckerz')

    let type = data? data.types[0].type.name: "grass";

    /* if (item > 3) {
        type = "fire";
    } */

    return (
        <View
            style={{ ...styles.card, backgroundColor: backgroundColors[type] }}

        >
            {data &&
            <>
              <View>
                <Text style={commonStyles.number}>#00{data.id} </Text>
                <Text style={{...textStyles.pokemonName, color:textColor.white  }}> {data.name} </Text>
                <View style={commonStyles.row}>
                    {data.types.map(item => <Tag key={item.type.name} type={item.type.name} />  )}
                </View>
            </View>
            <View style={styles.imageContainer}>
                <ImageBackground
                    resizeMode="contain"
                    source={Pokeball_card}
                    style={styles.imageBackground}
                >
                    <Image
                        style={styles.image}
                        source={{
                            uri: data.sprites.other['official-artwork'].front_default,
                        }}
                    />
                </ImageBackground>
            </View>
            </>
            }
        </View>
    );
};

export default Card;

const styles = StyleSheet.create({
    card: {
        marginVertical: 12,
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
    },
    imageContainer: {
        position: "absolute",
        right: 0,
        top: -25,
    },
    imageBackground: {
        width: 130,
        height: 130,
    },
    image: {
        width: 130,
        height: 130,
    },
});
