import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import useFetch from "./useFetch";

//Styles
import * as textStyles from "../../assets/generalStyles/textStyles";
import { textColor, colors, backgroundColors } from "../../assets/colors";

const AboutData = ({ aboutData }) => {
  let type = aboutData.types[0].type.name;
  const [{ data, loading, error }, doFetch] = useFetch(aboutData.species.url);

  let EVyield = aboutData.stats.find((item) => item.effort);

  return (
    <>
      {data && (
        <ScrollView showsVerticalScrollIndicator={false} >
          <Text style={styles.description}>
            {data.flavor_text_entries[8].flavor_text}
          </Text>
          <View>
            <Text
              style={{ ...styles.dataTitle, color: backgroundColors[type] }}
            >
              Pokédex Data
            </Text>
            <View style={styles.tableRow}>
              <View style={{ flex: 1 }}>
                <Text style={styles.dataKey}>Species</Text>
              </View>
              <View style={{ flex: 2 }}>
                <Text style={styles.dataValue}> {data.genera[7].genus} </Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={{ flex: 1 }}>
                <Text style={styles.dataKey}>Height</Text>
              </View>
              <View style={{ flex: 2 }}>
                <Text style={styles.dataValue}>
                  {" "}
                  {aboutData.height / 10 + "m"}{" "}
                </Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={{ flex: 1 }}>
                <Text style={styles.dataKey}>Weight</Text>
              </View>
              <View style={{ flex: 2 }}>
                <Text style={styles.dataValue}>
                  {" "}
                  {aboutData.weight / 10 + "kg"}{" "}
                </Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={{ flex: 1 }}>
                <Text style={styles.dataKey}>Abilities</Text>
              </View>
              <View style={{ flex: 2 }}>
                {aboutData.abilities.map((item) => (
                  <Text
                    key={item.ability.name}
                    style={{ ...styles.dataValue, textTransform: "capitalize" }}
                  >
                    {" "}
                    {item.ability.name}{" "}
                  </Text>
                ))}
              </View>
            </View>

            <Text
              style={{ ...styles.dataTitle, color: backgroundColors[type] }}
            >
              Training
            </Text>
            <View style={styles.tableRow}>
              <View style={{ flex: 1 }}>
                <Text style={styles.dataKey}>EV Yield</Text>
              </View>
              <View style={{ flex: 2 }}>
                {
                  <Text
                    style={{ ...styles.dataValue, textTransform: "capitalize" }}
                  >
                    {" "}
                    {`${EVyield.effort} ${EVyield.stat.name} `}{" "}
                  </Text>
                }
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={{ flex: 1 }}>
                <Text style={styles.dataKey}>Catch Rate</Text>
              </View>
              <View style={{ flex: 2 }}>
                <Text style={styles.dataValue}>{data.capture_rate}</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={{ flex: 1 }}>
                <Text style={styles.dataKey}>Base Happiness</Text>
              </View>
              <View style={{ flex: 2 }}>
                <Text style={styles.dataValue}> {data.base_happiness} </Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={{ flex: 1 }}>
                <Text style={styles.dataKey}>Base Exp</Text>
              </View>
              <View style={{ flex: 2 }}>
                <Text style={styles.dataValue}>
                  {" "}
                  {aboutData.base_experience}{" "}
                </Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={{ flex: 1 }}>
                <Text style={styles.dataKey}>Growth Rate</Text>
              </View>
              <View style={{ flex: 2 }}>
                <Text
                  style={{ ...styles.dataValue, textTransform: "capitalize" }}
                >
                  {" "}
                  {data.growth_rate.name}{" "}
                </Text>
              </View>
            </View>
            <Text
              style={{ ...styles.dataTitle, color: backgroundColors[type] }}
            >
              Breeding
            </Text>
            <View style={styles.tableRow}>
              <View style={{ flex: 1 }}>
                <Text style={styles.dataKey}>Gender</Text>
              </View>
              <View style={{ flex: 2, flexDirection: 'row' }}>
                <Text style={{...styles.dataValue, color: colors.water }}> { `${100 - (100 / 8 * data.gender_rate)}%`} </Text>
                <Text style={{...styles.dataValue, color: colors.fairy }}> { `${100 / 8 * data.gender_rate} %` } </Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={{ flex: 1 }}>
                <Text style={styles.dataKey}>Egg Groups</Text>
              </View>
              <View style={{ flex: 2}}>
                { data.egg_groups.map(item => <Text key={item.name} style={{...styles.dataValue,  textTransform: 'capitalize' }}> { item.name } </Text> ) }
              </View>
              <View style={styles.tableRow}>
              <View style={{ flex: 1 }}>
                <Text style={styles.dataKey}>Egg Cycles</Text>
              </View>
              <View style={{ flex: 2 }}>
                <Text style={styles.dataValue}> {`${data.hatch_counter} (${257 * (data.hatch_counter - 1)} - ${257 * (data.hatch_counter)} steps)` }  </Text>
              </View>
            </View>
            </View>
          </View>
        </ScrollView>
      )}
    </>
  );
};

export default AboutData;

const styles = StyleSheet.create({
  description: {
    ...textStyles.description,
    color: textColor.grey,
    marginBottom: 30,
  },
  dataTitle: {
    ...textStyles.filterTitle,
    color: colors.grass,
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  dataKey: {
    ...textStyles.pokemonType,
  },
  dataValue: {
    ...textStyles.description,
    color: textColor.grey,
  },
});
