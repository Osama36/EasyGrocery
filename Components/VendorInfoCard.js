import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

export default function VendorInfoCard({ navigation }) {
  return (
    <View style={styles.contactCard}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={styles.cardHeading}>CONTACT INFO</Text>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("VendorEditProfile")}
          style={styles.editBtn}
        >
          <Text style={{ fontSize: width * 0.04, color: "#fff" }}>EDIT</Text>
        </TouchableWithoutFeedback>
      </View>
      <Image source={require("../assets/img3.jpg")} style={styles.image} />
      <View style={styles.detailsContainer}>
        <View style={styles.coloredLabelContainer}>
          <Text style={styles.coloredLabel}>Shop Name:</Text>
          <Text style={styles.coloredLabel}>Vendor Name:</Text>
          <Text style={styles.coloredLabel}>Shop Address:</Text>
          <Text style={styles.coloredLabel}>Vendor Email:</Text>
          <Text style={styles.coloredLabel}>Vendor Cell No.:</Text>
          <Text style={styles.coloredLabel}>Shop Phone No.:</Text>
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>John's Mart</Text>
          <Text style={styles.label}>John Doe</Text>
          <Text style={styles.label}>Shop No. 123, Toronto, Canada</Text>
          <Text style={styles.label}>vendor123@gmail.com</Text>
          <Text style={styles.label}>+92 123-456-789</Text>
          <Text style={styles.label}>(021) 123-456</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contactCard: {
    marginTop: height * 0.01,
    height: height * 0.7,
    width: "100%",
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
    padding: width * 0.04,
  },
  cardHeading: {
    fontSize: width * 0.06,
  },
  image: {
    width: "100%",
    height: "35%",
    marginTop: height * 0.01,
  },
  detailsContainer: {
    width: "100%",
    height: "55%",
    marginTop: height * 0.02,
    flexDirection: "row",
  },
  coloredLabelContainer: {
    width: "35%",
    height: "65%",
    justifyContent: "space-evenly",
  },
  labelContainer: {
    width: "65%",
    height: "65%",
    justifyContent: "space-evenly",
  },
  coloredLabel: {
    fontSize: width * 0.035,
    color: "#c74b36",
  },
  label: {
    fontSize: width * 0.035,
  },
  editBtn: {
    borderWidth: width * 0.0025,
    paddingVertical: width * 0.01,
    paddingHorizontal: width * 0.03,
    borderRadius: width * 0.05,
    backgroundColor: "#c74b36",
    borderColor: "#c74b36",
  },
});
