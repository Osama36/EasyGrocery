import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
  Button,
  Alert,
} from "react-native";
import { TextInput, TouchableHighlight } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default function Register({ navigation }) {
  return (
    <View style={styles.mainCont}>
      <MaterialIcons
        name="arrow-back"
        size={width * 0.125}
        color="#c74b36"
        style={{ position: "absolute", top: height * 0.03, left: width * 0.03 }}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.formContainer}>
        <Text style={styles.heading}>Register</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ width: "45%" }}>
            <Text style={styles.label}>First Name</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={{ width: "45%" }}>
            <Text style={styles.label}>Last Name</Text>
            <TextInput style={styles.input} />
          </View>
        </View>
        <View style={styles.fieldRow}>
          <Text style={styles.label}>E-Mail</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.fieldRow}>
          <Text style={styles.label}>Phone No.</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.fieldRow}>
          <Text style={styles.label}>Address</Text>
          <TextInput style={styles.input} />
        </View>
        <TouchableHighlight style={styles.btnContainer}>
          <Text style={{ fontSize: width * 0.04, color: "#fff" }}>
            REGISTER
          </Text>
        </TouchableHighlight>
      </View>
      <Image
        source={require("../assets/wave.png")}
        style={{
          position: "absolute",
          zIndex: -1,
          top: height * -0.15,
          left: width * -0.35,
          transform: [{ rotate: "-30deg" }],
        }}
      />
      <Image
        source={require("../assets/wave.png")}
        style={{
          position: "absolute",
          zIndex: -1,
          bottom: height * -0.2,
          transform: [{ rotate: "160deg" }],
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainCont: {
    flex: 1,
    backgroundColor: "#e4ede6",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: width * 0.075,
    marginBottom: height * 0.05,
    color: "#c74b36",
    alignSelf: "center",
  },
  formContainer: {},
  label: {
    fontSize: width * 0.035,
    color: "#c74b36",
  },
  input: {
    borderBottomWidth: width * 0.003,
    lineHeight: 1,
  },
  btnContainer: {
    width: width * 0.3,
    alignSelf: "center",
    alignItems: "center",
    padding: width * 0.02,
    marginTop: height * 0.03,
    borderRadius: width * 0.05,
    backgroundColor: "#c74b36",
  },
  fieldRow: {
    marginVertical: height * 0.015,
  },
});
