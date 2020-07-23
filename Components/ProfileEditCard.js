import React from "react";
import { StyleSheet, Text, View, Dimensions, Button } from "react-native";
import Header from "../Components/Header";
import { MaterialIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

export default function ProfileEditCard() {
  return (
    <View style={styles.profileEditCard}>
      <Text style={styles.heading}>CONTACT INFO</Text>
      <View style={styles.contactForm}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: height * 0.02,
          }}
        >
          <View style={styles.shortField}>
            <Text>First Name</Text>
            <TextInput placeholder="Customer" style={styles.input}></TextInput>
          </View>
          <View style={styles.shortField}>
            <Text>Last Name</Text>
            <TextInput placeholder="Name" style={styles.input}></TextInput>
          </View>
        </View>
        <View style={{ paddingVertical: height * 0.02 }}>
          <Text>Email Address</Text>
          <TextInput
            placeholder="customer123@gmail.com"
            style={styles.input}
          ></TextInput>
        </View>
        <View style={{ paddingVertical: height * 0.02 }}>
          <Text>Mobile Number</Text>
          <TextInput
            placeholder="+92 123-456-789"
            style={styles.input}
          ></TextInput>
        </View>
      </View>
      <View style={styles.btn}>
        <Button title="UPDATE" color="#c74b36" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileEditCard: {
    marginTop: height * 0.02,
    height: height * 0.45,
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
    justifyContent: "space-evenly",
  },
  heading: {
    fontSize: width * 0.06,
    position: "absolute",
    top: height * 0.02,
    left: width * 0.05,
  },
  btn: {
    width: "20%",
    position: "absolute",
    right: width * 0.02,
    bottom: height * 0.02,
  },
  contactForm: {
    width: "80%",
    alignSelf: "center",
  },
  shortField: {
    width: "40%",
  },
  input: {
    lineHeight: 0,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
});
