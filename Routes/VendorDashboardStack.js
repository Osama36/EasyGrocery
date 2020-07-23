import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import VendorDashboard from "../VendorScreens/VendorDashboard";
import CustomerDetails from "../VendorScreens/CustomerDetails";

const Stack = createStackNavigator();

export default function VendorDashboardStack() {
  return (
    <Stack.Navigator initialRouteName="VendorDashboard" headerMode="none">
      <Stack.Screen name="VendorDashboard" component={VendorDashboard} />
      <Stack.Screen name="CustomerDetails" component={CustomerDetails} />
    </Stack.Navigator>
  );
}
