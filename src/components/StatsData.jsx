import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

//Styles
import * as textStyles from "../../assets/generalStyles/textStyles";
import { textColor, colors } from "../../assets/colors";
import { backgroundColors } from "../../assets/colors";

const StatsData = ({ statsData }) => {
  let type = statsData.types[0].type.name;
  
  const minHp = (baseValue) => {
    return baseValue * 2 + 110;
  };
  
  const maxHp = (baseValue) => {
    return baseValue * 2 + 110 + 252 / 4 + 31;
  };
  
  const minStat = (baseValue) => {
    return Math.floor((baseValue * 2 + 5) * 0.9);
  };
  
  const maxStat = (baseValue) => {
    return Math.floor((baseValue * 2 + 5 + 252 / 4 + 31) * 1.1);
  };
  
  const totalStat = () => {
    return (
      statsData.stats[0].base_stat +
      statsData.stats[1].base_stat +
      statsData.stats[2].base_stat +
      statsData.stats[3].base_stat +
      statsData.stats[4].base_stat +
      statsData.stats[5].base_stat
      );
    };
    
    const calculateBar = (baseValue, callback) => {
      let max = callback(baseValue);
      let onePercent = 100 / max;
      
      return baseValue * onePercent;
    }
    
    return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={{ ...styles.dataTitle, color: backgroundColors[type] }}>
          Base Stats
        </Text>
        <View style={styles.tableRow}>
          <View style={{ flex: 1 }}>
            <Text style={styles.dataKey}>HP</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.dataValue}>
              {" "}
              {statsData.stats[0].base_stat}{" "}
            </Text>
          </View>
          <View style={{ flex: 3, ...styles.statusBarWrapper }}>
            <View
              style={{
                ...styles.statusbar,
                backgroundColor: backgroundColors[type],
                width: `${calculateBar(statsData.stats[0].base_stat, minHp)}%`,
              }}
            ></View>
          </View>
          <View style={{ flex: 2, flexDirection: "row" }}>
            <Text style={{ flex: 1, ...styles.dataValue }}>
              {minHp(statsData.stats[0].base_stat)}
            </Text>
            <Text style={{ flex: 1, ...styles.dataValue }}>
              {maxHp(statsData.stats[0].base_stat)}
            </Text>
          </View>
        </View>

        <View style={styles.tableRow}>
          <View style={{ flex: 1 }}>
            <Text style={styles.dataKey}>Attack</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.dataValue}>
              {" "}
              {statsData.stats[1].base_stat}{" "}
            </Text>
          </View>
          <View style={{ flex: 3, ...styles.statusBarWrapper }}>
            <View
              style={{
                ...styles.statusbar,
                backgroundColor: backgroundColors[type],
                width: `${calculateBar(statsData.stats[1].base_stat, minStat)}%`,
              }}
            ></View>
          </View>
          <View style={{ flex: 2, flexDirection: "row" }}>
            <Text style={{ flex: 1, ...styles.dataValue }}>
              {" "}
              {minStat(statsData.stats[1].base_stat)}{" "}
            </Text>
            <Text style={{ flex: 1, ...styles.dataValue }}>
              {maxStat(statsData.stats[1].base_stat)}
            </Text>
          </View>
        </View>

        <View style={styles.tableRow}>
          <View style={{ flex: 1 }}>
            <Text style={styles.dataKey}>Defense</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.dataValue}>
              {" "}
              {statsData.stats[2].base_stat}{" "}
            </Text>
          </View>
          <View style={{ flex: 3, ...styles.statusBarWrapper }}>
            <View
              style={{
                ...styles.statusbar,
                backgroundColor: backgroundColors[type],
                width: `${calculateBar(statsData.stats[2].base_stat, minStat)}%`,
              }}
            ></View>
          </View>
          <View style={{ flex: 2, flexDirection: "row" }}>
            <Text style={{ flex: 1, ...styles.dataValue }}>
              {" "}
              {minStat(statsData.stats[2].base_stat)}{" "}
            </Text>
            <Text style={{ flex: 1, ...styles.dataValue }}>
              {maxStat(statsData.stats[2].base_stat)}
            </Text>
          </View>
        </View>

        <View style={styles.tableRow}>
          <View style={{ flex: 1 }}>
            <Text style={styles.dataKey}>Sp.Attk</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.dataValue}>
              {" "}
              {statsData.stats[3].base_stat}{" "}
            </Text>
          </View>
          <View style={{ flex: 3, ...styles.statusBarWrapper }}>
            <View
              style={{
                ...styles.statusbar,
                backgroundColor: backgroundColors[type],
                width: `${calculateBar(statsData.stats[3].base_stat, minStat)}%`,
              }}
            ></View>
          </View>
          <View style={{ flex: 2, flexDirection: "row" }}>
            <Text style={{ flex: 1, ...styles.dataValue }}>
              {" "}
              {minStat(statsData.stats[3].base_stat)}{" "}
            </Text>
            <Text style={{ flex: 1, ...styles.dataValue }}>
              {maxStat(statsData.stats[3].base_stat)}
            </Text>
          </View>
        </View>

        <View style={styles.tableRow}>
          <View style={{ flex: 1 }}>
            <Text style={styles.dataKey}>Sp. Def</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.dataValue}>
              {" "}
              {statsData.stats[4].base_stat}{" "}
            </Text>
          </View>
          <View style={{ flex: 3, ...styles.statusBarWrapper }}>
            <View
              style={{
                ...styles.statusbar,
                backgroundColor: backgroundColors[type],
                width: `${calculateBar(statsData.stats[4].base_stat, minStat)}%`,
              }}
            ></View>
          </View>
          <View style={{ flex: 2, flexDirection: "row" }}>
            <Text style={{ flex: 1, ...styles.dataValue }}>
              {" "}
              {minStat(statsData.stats[4].base_stat)}{" "}
            </Text>
            <Text style={{ flex: 1, ...styles.dataValue }}>
              {maxStat(statsData.stats[4].base_stat)}
            </Text>
          </View>
        </View>

        <View style={styles.tableRow}>
          <View style={{ flex: 1 }}>
            <Text style={styles.dataKey}>Speed</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.dataValue}>
              {" "}
              {statsData.stats[5].base_stat}{" "}
            </Text>
          </View>
          <View style={{ flex: 3, ...styles.statusBarWrapper }}>
            <View
              style={{
                ...styles.statusbar,
                backgroundColor: backgroundColors[type],
                width: `${calculateBar(statsData.stats[5].base_stat, minStat)}%`,
              }}
            ></View>
          </View>
          <View style={{ flex: 2, flexDirection: "row" }}>
            <Text style={{ flex: 1, ...styles.dataValue }}>
              {" "}
              {minStat(statsData.stats[5].base_stat)}{" "}
            </Text>
            <Text style={{ flex: 1, ...styles.dataValue }}>
              {maxStat(statsData.stats[5].base_stat)}
            </Text>
          </View>
        </View>

        <View style={styles.tableRow}>
          <View style={{ flex: 1 }}>
            <Text style={styles.dataKey}>Total</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.dataValue}> {totalStat()} </Text>
          </View>
          <View style={{ flex: 3, ...styles.statusBarWrapper }} />
          <View style={{ flex: 2, ...styles.minMaxWrapper }}>
            <Text style={{ flex: 1, ...styles.minMax }}>Min</Text>
            <Text style={{ flex: 1, ...styles.minMax }}>Max</Text>
          </View>
        </View>

        <Text style={styles.descriptionSmall}>
          The ranges shown on the right are for a level 100 Pokémon. Maximum
          values are based on a beneficial nature, 255 EVs, 31 IVs; minimum
          values are based on a hindering nature, 0 EVs, 0 IVs.
        </Text>

        <Text style={{ ...styles.dataTitle, color: backgroundColors[type] }}>
          Type Defenses
        </Text>

        <Text style={styles.description}>
          {`The effectiveness of each type on ${statsData.name}.`}
        </Text>
      </ScrollView>
    </>
  );
};

export default StatsData;

const styles = StyleSheet.create({
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
    textAlign: "right",
  },
  statusBarWrapper: { paddingHorizontal: 10 },
  statusbar: {
    backgroundColor: colors.grass,
    height: 4,
    borderRadius: "100%",
  },
  minMaxWrapper: {
    flexDirection: "row",
  },
  minMax: {
    ...textStyles.pokemonType,
    textAlign: "right",
  },
  descriptionSmall: {
    ...textStyles.pokemonType,
    color: textColor.grey,
    marginBottom: 30,
  },
  description: {
    ...textStyles.description,
    color: textColor.grey,
    marginBottom: 30,
  },
});
