import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Products from "../Screens/Products";
import Item from "../Screens/Item";

const Stack = createStackNavigator();

export default function ProductsStack() {
  return (
    <Stack.Navigator initialRouteName="Products" headerMode="none">
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Item" component={Item} />
    </Stack.Navigator>
  );
}
