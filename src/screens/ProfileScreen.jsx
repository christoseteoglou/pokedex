import React, { useState, useEffect, useRef, useMemo } from "react";
import { StyleSheet, View } from "react-native";

// Styles
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

  const sheetRef = useRef<BottomSheet>(null);
  const [ isOpen, setIsOpen ] = useState(true);
  const snapPoints = useMemo(() => ["90%", '100%'], []);


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
        <BottomSheet ref={()=> sheetRef} snapPoints={snapPoints}>
        <View style={styles.dataSheet}>
          {activeTab === "About" ? (
            <AboutData aboutData={ data } />
          ) : activeTab === "Stats" ? (
            <StatsData statsData={ data } />
          ) : (
            <EvolutionData />
          )}
        </View>
        </BottomSheet>
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
    paddingTop: 40,
    paddingRight: 30,
    paddingLeft: 30,
  },
});
