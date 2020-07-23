import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Header from "../Components/Header";
import VendorInfoCard from "../Components/VendorInfoCard";

const { width, height } = Dimensions.get("window");

export default function VendorProfile({ navigation }) {
  return (
    <View style={styles.mainCont}>
      <Header
        heading="MY PROFILE"
        icon="arrow-back"
        navigation={navigation}
        toDrawer="Y"
      />
      <View style={{ width: "95%" }}>
        <VendorInfoCard navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainCont: {
    width,
    height,
    backgroundColor: "#e4ede6",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
