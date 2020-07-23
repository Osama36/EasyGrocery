import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Header from "../Components/Header";
import ProfileEditCard from "../Components/ProfileEditCard";

const { width, height } = Dimensions.get("window");

export default function EditProfile({ navigation }) {
  return (
    <View style={styles.mainCont}>
      <Header heading="MY PROFILE" navigation={navigation} icon="arrow-back" />
      <ProfileEditCard />
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
