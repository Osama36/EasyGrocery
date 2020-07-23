import React from "react";
import { StyleSheet, Text, View, Dimensions, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

export default function AddItemCard({ name, email, phone }) {
  return (
    <View style={styles.addItemCard}>
      <Text style={styles.heading}>ADD ITEM</Text>
      <View style={styles.fieldsContainer}>
        <TextInput></TextInput>

        <View style={styles.btn}>
          <Button title="ADD ITEM" color="#c74b36" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  addItemCard: {
    marginTop: height * 0.05,
    height: height * 0.6,
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
    paddingTop: height * 0.01,
    width: "90%",
    alignSelf: "center",
  },
  fieldsContainer: {
    height: "80%",
    width: "90%",
    backgroundColor: "#94d4ff",
    marginTop: height * 0.02,
    alignSelf: "center",
  },
  btn: {
    width: "30%",
    position: "absolute",
    right: 0,
    bottom: 0,
  },
});
