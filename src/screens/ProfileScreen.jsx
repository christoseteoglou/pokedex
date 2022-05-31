import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

//Styles
import * as textStyles from "../../assets/generalStyles/textStyles";
import { textColor, colors } from "../../assets/colors";
import { backgroundColors } from "../../assets/colors";

// Components
import ProfileHero from "../components/ProfileHero";
import AboutData from "../components/AboutData";
import StatsData from "../components/StatsData";
import ProfileTabNavigation from "../components/ProfileTabNavigation";
import EvolutionData from "../components/EvolutionData";

const ProfileScreen = ({ route }) => {
    const { data } = route.params;
  let type = data.types[0].type.name;
  const [activeTab, setActiveTab] = useState("About");

  function handleActiveTab(state) {
    setActiveTab(state);
  }

  return (
    <>
      <ProfileHero data={data} />
      <View
        style={{
          ...styles.dataWrapper,
          backgroundColor: backgroundColors[type],
        }}
      >
        <View style={{...styles.dataNavigation, backgroundColor: backgroundColors[type]}}>
          <ProfileTabNavigation
            activeTab={activeTab}
            handleActiveTab={handleActiveTab}
          />
        </View>
        <View style={styles.dataSheet}>
          {activeTab === "About" ? (
            <AboutData aboutData={ data } />
          ) : activeTab === "Stats" ? (
            <StatsData />
          ) : (
            <EvolutionData />
          )}
        </View>
      </View>
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  dataWrapper: {
    flex: 3,
    backgroundColor: "#8BBE8A",
  },
  dataNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#8BBE8A",
    paddingTop: 10,
    paddingBottom: 10,
  },
  dataSheet: {
    flex: 1,
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingTop: 40,
    paddingRight: 30,
    paddingLeft: 30,
  },
});
