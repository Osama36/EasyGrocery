import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import VendorProfile from "../VendorScreens/VendorProfile";
import VendorEditProfile from "../VendorScreens/VendorEditProfile";

const Stack = createStackNavigator();

export default function VendorProfileStack() {
  return (
    <Stack.Navigator initialRouteName="VendorDashboard" headerMode="none">
      <Stack.Screen name="VendorProfile" component={VendorProfile} />
      <Stack.Screen name="VendorEditProfile" component={VendorEditProfile} />
    </Stack.Navigator>
  );
}
