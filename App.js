import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DefaultStack from "./Routes/DefaultStack";
import VendorDrawer from "./Routes/VendorDrawer";

export default function App() {
  return (
    <DefaultStack />
  //  <VendorDrawer />
  );
}
