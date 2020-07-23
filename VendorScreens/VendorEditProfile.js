import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Header from "../Components/Header";
import VendorInfoEditCard from "../Components/VendorInfoEditCard";

const { width, height } = Dimensions.get("window");

export default function VendorEditProfile({ navigation }) {
  return (
    <View style={styles.mainCont}>
      <Header heading="MY PROFILE" icon="arrow-back" navigation={navigation} />
      <View style={{ width: "90%" }}>
        <VendorInfoEditCard />
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
