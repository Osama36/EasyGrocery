import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Header from "../Components/Header";
import { MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default function SettingsCard() {
  return (
    <View style={styles.settingsCard}>
      <Text style={{ fontSize: width * 0.03, color: "grey" }}>Language</Text>
      <Text style={{ fontSize: width * 0.05, marginTop: height * 0.01 }}>
        English
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  settingsCard: {
    flexDirection: "column",
    marginTop: height * 0.02,
    height: height * 0.13,
    width: "95%",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "#fff",
  },
});
