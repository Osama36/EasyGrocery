import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Header from "../Components/Header";
import { MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default function AddressCard({ addrname, address }) {
  return (
    <View style={styles.addressCard}>
      <View style={styles.icon}>
        <MaterialIcons
          name="home"
          size={width * 0.08}
          style={styles.homeicon}
        />
      </View>
      <View style={styles.address}>
        <Text style={styles.addressTitle}>{addrname}</Text>
        <Text style={styles.addressDesc}>{address}</Text>
      </View>
      <View style={styles.edit}>
        <Text style={styles.editbtn}>EDIT</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  addressCard: {
    flexDirection: "row",
    marginTop: height * 0.02,
    height: height * 0.1,
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

  icon: {
    width: "15%",
    height: "100%",
    alignContent: "center",
  },
  homeicon: {
    position: "absolute",
    top: 0,
    color: "#c74b36",
  },
  address: {
    flexDirection: "column",
    width: "70%",
    height: "100%",
    justifyContent: "center",
  },
  edit: {
    width: "15%",
    height: "100%",
  },
  editbtn: {
    color: "#c74b36",
    fontSize: width * 0.045,
    position: "absolute",
    top: 0,
  },
  addressTitle: {
    fontSize: width * 0.05,
    position: "absolute",
    top: 0,
  },
  addressDesc: {
    fontSize: width * 0.032,
    marginTop: height * 0.04,
  },
});
