import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Button,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default function About({ navigation }) {
  return (
    <View style={styles.mainCont}>
      <View style={styles.about}>
        <MaterialIcons
          name="arrow-back"
          size={width * 0.1}
          onPress={() => navigation.openDrawer()}
          style={{
            position: "absolute",
            left: width * 0.02,
            zIndex: 10,
            color: "#fff",
            top: height * 0.03,
          }}
        />
        <ImageBackground
          source={require("../assets/bg.jpg")}
          style={styles.background}
        >
          <View style={styles.overlay}></View>
          <Text style={styles.heading}>ABOUT US</Text>
        </ImageBackground>
      </View>

      <View style={styles.aboutSection}>
        <Text style={{ fontSize: width * 0.065, color: "#c74b36" }}>
          LOREM IPSUM
        </Text>
        <Text style={styles.desc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Text>
      </View>
      <View style={styles.btnSection}>
        <View style={styles.btn}>
          <Button style={styles.btn} title="CALL US" color="#c74b36" />
        </View>
        <View style={styles.btn}>
          <Button style={styles.btn} title="MESSAGE US" color="#c74b36" />
        </View>
        <View style={styles.btn}>
          <Button style={styles.btn} title="SEND AN EMAIL" color="#c74b36" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainCont: {
    width,
    height,
    backgroundColor: "#e4ede6",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
  },
  about: {
    height: height * 0.27,
    width: "100%",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  background: {
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  heading: {
    fontSize: width * 0.07,
    color: "#fff",
    position: "absolute",
    top: "50%",
  },
  aboutSection: {
    marginTop: height * 0.05,
    alignItems: "center",
    width: "100%",
  },
  desc: {
    width: "80%",
    height: height * 0.4,
    paddingTop: height * 0.02,
    fontSize: height * 0.025,
    alignSelf: "center",
  },
  btnSection: {
    width: "100%",
    height: height * 0.15,
    position: "absolute",
    bottom: 0,
    justifyContent: "space-evenly",
  },
  btn: {
    marginVertical: 10,
  },
});
