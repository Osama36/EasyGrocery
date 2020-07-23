import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MyAddresses from "../Screens/MyAddresses";
import EditAddress from "../Screens/EditAddress";

const Stack = createStackNavigator();

export default function AddressStack() {
  return (
    <Stack.Navigator initialRouteName="MyAddresses" headerMode="none">
      <Stack.Screen name="MyAddresses" component={MyAddresses} />
      <Stack.Screen name="EditAddress" component={EditAddress} />
    </Stack.Navigator>
  );
}
