import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Header from "../Components/Header";
import SettingsCard from "../Components/SettingsCard";

const { width, height } = Dimensions.get("window");

export default function Settings({ navigation }) {
  return (
    <View style={styles.mainCont}>
      <Header
        heading="SETTINGS"
        navigation={navigation}
        icon="arrow-back"
        toDrawer="Y"
      />
      <SettingsCard />
    </View>
  );
}

const styles = StyleSheet.create({
  mainCont: {
    width,
    height,
    backgroundColor: "#e4ede6",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
  },
});
