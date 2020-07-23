import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Button,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";
import { MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default function VendorInfoEditCard({ name, email, phone }) {
  return (
    <View style={styles.contactCard}>
      <View>
        <Text style={styles.cardHeading}>CONTACT INFO</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.shortFieldContainer}>
          <View style={{ width: "35%" }}>
            <Text style={styles.label}>Shop Name</Text>
            <TextInput style={styles.input} placeholder="John's Mart" />
          </View>
          <View style={{ width: "40%" }}>
            <Text style={styles.label}>Vendor Full Name</Text>
            <TextInput style={styles.input} placeholder="John Doe" />
          </View>
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Shop Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Shop no. 123, Toronto, Canada"
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput style={styles.input} placeholder="vendor123@gmail.com" />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Mobile Number</Text>
          <TextInput style={styles.input} placeholder="+92 123-456-789" />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Telephone Number</Text>
          <TextInput style={styles.input} placeholder="(021) 123-456-789" />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Upload Shop Image</Text>
          <View>
            <TextInput style={styles.input} />
            <MaterialIcons
              name="publish"
              size={height * 0.03}
              color="#c74b36"
              style={{ position: "absolute", right: 0 }}
            />
          </View>
        </View>
      </View>
      <View style={styles.btn}>
        <Button title="UPDATE" color="#c74b36" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contactCard: {
    marginTop: height * 0.01,
    height: height * 0.75,
    width: "100%",
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
  formContainer: {
    padding: height * 0.025,
  },
  fieldContainer: {
    marginVertical: height * 0.015,
  },
  shortFieldContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    fontSize: width * 0.035,
    color: "#c74b36",
  },
  input: {
    borderBottomWidth: width * 0.003,
    lineHeight: 1,
  },
  btn: {
    width: "30%",
    position: "absolute",
    right: width * 0.05,
    bottom: height * 0.02,
  },
});
