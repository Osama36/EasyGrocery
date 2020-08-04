import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../Screens/Welcome";
import Drawer from "../Routes/Drawer";
import LoginStack from "./LoginStack";

const Stack = createStackNavigator();

export default function DefaultStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" headerMode="none">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="LoginStack" component={LoginStack} />
        <Stack.Screen name="Drawer" component={Drawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
