import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default function LineHeading({ heading }) {
  return (
    <View style={styles.linedHeadingContainer}>
      <View style={styles.lineContainer}>
        <View style={styles.line} />
      </View>
      <View style={styles.linedHeading}>
        <Text>{heading}</Text>
      </View>
      <View style={styles.lineContainer}>
        <View style={styles.line} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  linedHeadingContainer: {
    flexDirection: "row",
    width: "100%",
    height: height * 0.07,
  },
  linedHeading: {
    width: "28%",
    alignItems: "center",
    justifyContent: "center",
  },
  lineContainer: {
    height: "100%",
    width: "36%",
    justifyContent: "center",
  },
  line: {
    width: "100%",
    height: "1%",
    backgroundColor: "grey",
  },
});
