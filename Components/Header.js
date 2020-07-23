import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Home from "../Screens/Home";

const { width, height } = Dimensions.get("window");

export default function Header({ heading, icon, navigation, toDrawer }) {
  return (
    <View style={styles.header}>
      <MaterialIcons
        name={icon}
        size={width * 0.1}
        style={styles.icon}
        onPress={() => {
          if (toDrawer == "Y") {
            navigation.openDrawer();
          } else {
            navigation.goBack();
          }
        }}
      />
      <Text style={styles.heading}>{heading}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: height * 0.1,
    flexDirection: "row",
    backgroundColor: "#c74b36",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    color: "#fff",
    position: "absolute",
    left: width * 0.04,
  },
  heading: {
    fontSize: width * 0.06,
    color: "#fff",
  },
});
