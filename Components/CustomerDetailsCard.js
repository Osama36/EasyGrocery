import React from "react";
import { StyleSheet, Text, View, Dimensions, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";

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
      <View style={styles.fieldsContainer}>
        <Text style={styles.text}>Upload Items Receipt</Text>
        <View>
          <TextInput style={styles.input} />
          <View style={{ position: "absolute", right: 0 }}>
            <MaterialIcons
              name="publish"
              size={height * 0.03}
              color="#c74b36"
            />
          </View>
        </View>
        <Text style={styles.text}>Total Bill</Text>
        <View style={{ width: "50%" }}>
          <TextInput style={styles.input} />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="SEND" color="#c74b36" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contactCard: {
    marginTop: height * 0.02,
    height: height * 0.53,
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
    padding: width * 0.03,
  },
  customerImage: {
    borderRadius: width * 0.3,
    borderWidth: 2,
    borderColor: "#c74b36",
    width: "25%",
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  customerDetails: {
    width: "100 %",
    paddingTop: height * 0.02,
  },
  text: {
    fontSize: width * 0.035,
    paddingVertical: height * 0.002,
  },
  fieldsContainer: {
    marginTop: height * 0.02,
  },
  input: {
    borderBottomWidth: height * 0.0015,
    borderBottomColor: "grey",
    lineHeight: 1,
  },
  buttonContainer: {
    width: "20%",
    position: "absolute",
    bottom: height * 0.03,
    right: width * 0.03,
  },
});
