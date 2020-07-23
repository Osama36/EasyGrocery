import React from "react";
import { StyleSheet, Text, View, Dimensions, Button } from "react-native";
import Header from "../Components/Header";
import { MaterialIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

export default function AddressEditCard() {
  return (
    <View style={styles.addressEditCard}>
      <Text style={styles.heading}>ADDRESS INFO</Text>
      <Text>Full Address</Text>
      <TextInput
        placeholder="Hno 123, DHA Karachi, Pakistan"
        style={styles.input}
      />
      <View style={styles.btn}>
        <Button title="UPDATE" color="#c74b36" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  addressEditCard: {
    marginTop: height * 0.02,
    height: height * 0.25,
    width: "95%",
    padding: width * 0.03,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  heading: {
    fontSize: width * 0.06,
    position: "absolute",
    top: height * 0.02,
    left: width * 0.05,
  },
  input: {
    lineHeight: 0,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  btn: {
    width: "20%",
    position: "absolute",
    right: width * 0.02,
    bottom: height * 0.02,
  },
});
