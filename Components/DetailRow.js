import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default function DetailRow({ icon, line1, line2, line3 }) {
  return (
    <View style={styles.detailsRow}>
      <View style={styles.icon}>
        <MaterialIcons
          name={icon}
          size={width * 0.07}
          style={{ color: "#c74b36" }}
        />
      </View>
      <View style={styles.details}>
        <Text style={styles.detailsText}>{line1}</Text>
        <Text style={styles.detailsText}>{line2}</Text>
        <Text style={styles.detailsText}>{line3}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsRow: {
    width: "100%",
    height: "33.33%",
    flexDirection: "row",
  },
  icon: {
    height: "100%",
    width: "15%",
    paddingLeft: width * 0.03,
    paddingTop: height * 0.01,
  },
  details: {
    justifyContent: "space-evenly",
  },
  detailsText: {
    fontSize: width * 0.035,
  },
});
