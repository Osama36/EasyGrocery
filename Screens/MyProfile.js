import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Header from "../Components/Header";
import ContactCard from "../Components/ContactCard";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

export default function MyProfile({ navigation }) {
  return (
    <>
      <View style={styles.mainCont}>
        <Header
          heading="MY PROFILE"
          navigation={navigation}
          icon="arrow-back"
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("EditProfile")}
          style={{ width, alignItems: "center" }}
        >
          <ContactCard
            name="Customer Name"
            email="customer123@gmail.com"
            phone="+92 123-456-789"
          />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainCont: {
    width,
    height: height,
    backgroundColor: "#e4ede6",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
