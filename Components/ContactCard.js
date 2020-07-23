import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default function ContactCard({ name, email, phone }) {
  return (
    <View style={styles.contactCard}>
      <Text style={styles.heading}>CONTACT INFO</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{email}</Text>
        <Text style={styles.text}>{phone}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contactCard: {
    marginTop: height * 0.05,
    height: height * 0.2,
    width: "90%",
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
  heading: {
    fontSize: width * 0.06,
  },
  detailsContainer: {
    paddingTop: height * 0.02,
    justifyContent: "space-around",
  },
  text: {
    fontSize: width * 0.035,
    color: "grey",
  },
});
