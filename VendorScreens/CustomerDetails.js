import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Header from "../Components/Header";
import CustomerDetailsCard from "../Components/CustomerDetailsCard";

const { width, height } = Dimensions.get("window");

export default function CustomerDetails({ navigation }) {
  return (
    <View style={styles.mainCont}>
      <Header
        heading="CUSTOMER DETAILS"
        icon="arrow-back"
        navigation={navigation}
      />
      <CustomerDetailsCard />
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
