import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Header from "../Components/Header";
import AddressCard from "../Components/AddressCard";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

export default function MyAddresses({ navigation }) {
  return (
    <View style={styles.mainCont}>
      <Header
        heading="MY ADDRESSES"
        navigation={navigation}
        icon="arrow-back"
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("EditAddress")}
        style={styles.tO}
      >
        <AddressCard
          addrname="HOME"
          address="Hno. 123 Lane 5, DHA Karachi, Pakistan"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("EditAddress")}
        style={styles.tO}
      >
        <AddressCard
          addrname="OFFICE"
          address="Hno. 654 Lane 9, DHA Karachi, Pakistan"
        />
      </TouchableOpacity>
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
  tO: {
    alignSelf: "center",
  },
});
