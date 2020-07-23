import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default function ContactCard({ name, email, phone }) {
  return (
    <View style={styles.contactCard}>
      <View style={styles.customerImage}>
        <Text style={{ fontSize: width * 0.13, color: "#c74b36" }}>K</Text>
      </View>
      <View style={styles.customerDetails}>
        <Text style={styles.text}>Customers Name</Text>
        <Text style={styles.text}>01-12-2018 01:51 PM</Text>
        <Text style={styles.text}>Hno. 123 Lane 5, DHA Karachi, Pakistan</Text>
        <Text style={styles.text}>+92 123-456-789</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contactCard: {
    marginTop: height * 0.02,
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
    alignSelf: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    padding: width * 0.03,
  },
  customerImage: {
    borderRadius: width * 0.5,
    borderWidth: 2,
    borderColor: "#c74b36",
    width: "30%",
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  customerDetails: {
    paddingLeft: width * 0.06,
    width: "70 %",
    justifyContent: "space-evenly",
  },
  text: {
    fontSize: width * 0.035,
  },
});
