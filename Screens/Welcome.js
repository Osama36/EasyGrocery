import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

export default function Welcome({ navigation }) {
  useEffect(() => {
    AsyncStorage.getItem("isLoggedIn").then((value) => {
      if (value != "1") {
        const timer = setTimeout(
          () => navigation.navigate({ name: "LoginStack" }),
          2000
        );
      } else {
        const timer = setTimeout(
          () => navigation.navigate({ name: "Drawer" }),
          2000
        );
      }
    });
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c74b36",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 250,
    height: 250,
  },
});
