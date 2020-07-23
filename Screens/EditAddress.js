import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Header from "../Components/Header";
import AddressEditCard from "../Components/AddressEditCard";

const { width, height } = Dimensions.get("window");

export default function EditAddress({ navigation }) {
  return (
    <View style={styles.mainCont}>
      <Header
        heading="MY ADDRESSES"
        navigation={navigation}
        icon="arrow-back"
      />
      <AddressEditCard />
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
