import React from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import Header from "../Components/Header";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import LineHeading from "../Components/LineHeading";
import CustomerCard from "../Components/CustomerCard";

const { width, height } = Dimensions.get("window");

export default function VendorDashboard({ navigation }) {
  return (
    <View style={styles.mainCont}>
      <Header
        heading="DASHBOARD"
        icon="menu"
        navigation={navigation}
        toDrawer="Y"
      />
      <View style={styles.searchContainer}>
        <View style={styles.searchsubContainer}>
          <View style={{ marginLeft: width * 0.02, alignSelf: "center" }}>
            <MaterialIcons name="search" size={height * 0.03} color="grey" />
          </View>
          <TextInput
            style={styles.search}
            placeholder="Search"
            placeholderTextColor="#c74b36"
          />
        </View>
      </View>
      <ScrollView style={{ width }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("CustomerDetails")}
        >
          <CustomerCard />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("CustomerDetails")}
        >
          <CustomerCard />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("CustomerDetails")}
        >
          <CustomerCard />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("CustomerDetails")}
        >
          <CustomerCard />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("CustomerDetails")}
        >
          <CustomerCard />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("CustomerDetails")}
        >
          <CustomerCard />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainCont: {
    width,
    height,
    backgroundColor: "#e4ede6",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  searchContainer: {
    backgroundColor: "#fff",
    height: height * 0.07,
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
  searchsubContainer: {
    backgroundColor: "#e4ede6",
    width: "95%",
    height: height * 0.04,
    borderRadius: height * 0.02,
    flexDirection: "row",
  },
  search: {
    width: "90%",
    alignSelf: "flex-end",
    alignSelf: "center",
    lineHeight: 1,
    paddingLeft: width * 0.02,
  },
});
