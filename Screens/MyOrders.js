import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Header from "../Components/Header";
import OrderCard from "../Components/OrderCard";
import LineHeading from "../Components/LineHeading";

const { width, height } = Dimensions.get("window");

export default function MyOrders({ navigation }) {
  return (
    <View style={styles.mainCont}>
      <Header heading="MY ORDERS" navigation={navigation} icon="arrow-back" />
      <LineHeading heading="PAST ORDERS" />
      <View style={{ width: "90%", alignSelf: "center" }}>
        <OrderCard
          name="John's Mart"
          date="01-12-2018"
          time="01:51 PM"
          delivery="Free Delivery"
          price="300"
          status="DELIVERED"
        />
        <OrderCard
          name="Kings's Mart"
          date="11-06-2018"
          time="11:51 PM"
          delivery="Delivery Charges: C$. 30"
          price="1300"
          status="DELIVERED"
        />
        <OrderCard
          name="John's Mart"
          date="11-08-2018"
          time="01:51 PM"
          delivery="Delivery Charges: C$. 10"
          price="150"
          status="DELIVERED"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainCont: {
    width,
    height,
    backgroundColor: "#e4ede6",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
  },
});
