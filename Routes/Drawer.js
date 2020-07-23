import * as React from "react";
import { Button, View, Dimensions, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "../Routes/HomeStack";
import ProfileStack from "../Routes/ProfileStack";
import AddressStack from "../Routes/AddressStack";
import Settings from "../Screens/Settings";
import MyOrders from "../Screens/MyOrders";
import About from "../Screens/About";
import SideBar from "../Components/SideBar";
import Products from "../Screens/Products";
import { MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");
const drawerIconColor = "#c74b36";
const drawerIconSize = width * 0.06;

const MyDrawer = createDrawerNavigator();

export default function Drawer({ navigation }) {
  return (
    <MyDrawer.Navigator
      initialRouteName="HOME"
      drawerContent={(props) => <SideBar {...props} />}
      drawerContentOptions={{
        labelStyle: { fontSize: width * 0.04 },
        activeTintColor: "#c74b36",
      }}
    >
      <MyDrawer.Screen
        name="HOME"
        component={HomeStack}
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
        name="PRODUCTS"
        component={Products}
        options={{
          drawerIcon: () => (
            <MaterialIcons
              name="search"
              size={drawerIconSize}
              color={drawerIconColor}
            />
          ),
        }}
      />
      <MyDrawer.Screen
        name="MY ORDERS"
        component={MyOrders}
        options={{
          drawerIcon: () => (
            <MaterialIcons
              name="bookmark-border"
              size={drawerIconSize}
              color={drawerIconColor}
            />
          ),
        }}
      />
      <MyDrawer.Screen
        name="MY PROFILE"
        component={ProfileStack}
        options={{
          drawerIcon: () => (
            <MaterialIcons
              name="account-box"
              size={drawerIconSize}
              color={drawerIconColor}
            />
          ),
        }}
      />
      <MyDrawer.Screen
        name="MY ADDRESSES"
        component={AddressStack}
        options={{
          drawerIcon: () => (
            <MaterialIcons
              name="business"
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
      <MyDrawer.Screen
        name="ABOUT US"
        component={About}
        options={{
          drawerIcon: () => (
            <MaterialIcons
              name="info"
              size={drawerIconSize}
              color={drawerIconColor}
            />
          ),
        }}
      />
    </MyDrawer.Navigator>
  );
}
