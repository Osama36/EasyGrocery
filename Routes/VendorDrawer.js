import * as React from "react";
import { Button, View, Dimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import VendorDashboardStack from "../Routes/VendorDashboardStack";
import SideBar from "../Components/SideBar";
import { MaterialIcons } from "@expo/vector-icons";
import Settings from "../Screens/Settings";
import VendorProfileStack from "./VendorProfileStack";

const { width, height } = Dimensions.get("window");
const drawerIconColor = "#c74b36";
const drawerIconSize = width * 0.06;

const MyDrawer = createDrawerNavigator();

export default function VendorDrawer() {
  return (
    <NavigationContainer>
      <MyDrawer.Navigator
        initialRouteName="MY ORDERS"
        drawerContent={(props) => <SideBar {...props} />}
        drawerContentOptions={{
          labelStyle: { fontSize: width * 0.04 },
          activeTintColor: "#c74b36",
        }}
      >
        <MyDrawer.Screen
          name="MY ORDERS"
          component={VendorDashboardStack}
          options={{
            drawerIcon: () => (
              <MaterialIcons
                name="home"
                size={drawerIconSize}
                color={drawerIconColor}
              />
            ),
          }}
        />

        <MyDrawer.Screen
          name="MY PROFILE"
          component={VendorProfileStack}
          options={{
            drawerIcon: () => (
              <MaterialIcons
                name="assignment-ind"
                size={drawerIconSize}
                color={drawerIconColor}
              />
            ),
          }}
        />
        <MyDrawer.Screen
          name="SETTINGS"
          component={Settings}
          options={{
            drawerIcon: () => (
              <MaterialIcons
                name="settings"
                size={drawerIconSize}
                color={drawerIconColor}
              />
            ),
          }}
        />
      </MyDrawer.Navigator>
    </NavigationContainer>
  );
}
