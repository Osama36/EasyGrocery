import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
  Dimensions,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-community/async-storage";

const { width, height } = Dimensions.get("window");

export default function SideBar(props) {
  const logout = async () => {
    await AsyncStorage.clear(), props.navigation.navigate("LoginStack");
  };

  return (
    <>
      <ScrollView>
        <View style={styles.headContainer}>
          <Image
            source={require("../assets/profile.jpg")}
            style={styles.profile}
          />
          <Text style={styles.username}>King Smith</Text>
        </View>
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      </ScrollView>

      <TouchableOpacity
        style={{
          alignSelf: "center",
          paddingBottom: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
        onPress={logout}
      >
        <MaterialIcons name="exit-to-app" size={20} color="#c74b36" />
        <Text style={{ fontSize: 20, color: "#c74b36", paddingLeft: 10 }}>
          SIGNOUT
        </Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  headContainer: {
    width: width,
    height: height * 0.25,
    backgroundColor: "#c74b36",
    justifyContent: "center",
    flex: 1,
  },
  profile: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#fff",
    marginLeft: width * 0.05,
  },
  username: {
    color: "#fff",
    fontSize: width * 0.06,
    marginLeft: width * 0.05,
    position: "absolute",
    bottom: 10,
  },
});
