import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
  Button,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { TextInput, TouchableHighlight } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const user = { name: "admin", pass: "123" };

export default function Login({ navigation }) {
  const [username, setusername] = useState("");
  const [pass, setpass] = useState("");
  const handleLogin = async () => {
    if (username === user.name && pass === user.pass) {
      await AsyncStorage.setItem("isLoggedIn", "1");

      navigation.navigate("Drawer");
    } else {
      alert("FAiL");
    }
  };

  return (
    <View style={styles.mainCont}>
      <ImageBackground
        source={require("../assets/loginbg.jpg")}
        style={styles.background}
      >
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <View style={{ marginTop: height * 0.25 }}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              onChangeText={(text) => setusername(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={(pass) => setpass(pass)}
            />
          </View>
        </View>
        <View style={styles.btnArea}>
          <TouchableHighlight style={styles.btnContainer} onPress={handleLogin}>
            <Text style={{ fontSize: width * 0.04, color: "#fff" }}>LOGIN</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.btnContainer}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={{ fontSize: width * 0.04, color: "#fff" }}>
              REGISTER
            </Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  mainCont: {
    width,
    height: height,
    backgroundColor: "#e4ede6",
  },
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: -1,
  },
  logo: {
    width: width * 0.4,
    height: height * 0.3,
    position: "absolute",
    top: height * 0.175,
  },
  inputContainer: {
    backgroundColor: "rgba(255, 236, 225, 1)",
    width: width * 0.7,
    height: height * 0.05,
    borderRadius: width * 0.05,
    marginVertical: height * 0.01,
    justifyContent: "center",
  },
  btnArea: {
    width: width * 0.7,
    marginTop: height * 0.05,
    flexDirection: "row",
    justifyContent: "space-around",
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
  input: {
    lineHeight: 1,
    paddingLeft: width * 0.05,
    fontSize: width * 0.04,
    color: "#c74b36",
  },
});
