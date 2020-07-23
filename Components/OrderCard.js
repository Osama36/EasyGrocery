import React from "react";
import { StyleSheet, Text, View, Dimensions, Button } from "react-native";
import Header from "../Components/Header";
import { MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default function OrderCard({
  name,
  date,
  time,
  delivery,
  price,
  status,
}) {
  return (
    <View style={styles.orderCard}>
      <View style={styles.orderDetailsContainer}>
        <Text>{name}</Text>
        <Text>
          {date} {time}
        </Text>
        <Text>{delivery}</Text>
      </View>

      <View style={styles.orderStatusContainer}>
        <Text style={{ alignSelf: "flex-end" }}>C$. {price}</Text>
        <View>
          <Button title={status} color="#c74b36" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  orderCard: {
    flexDirection: "row",
    marginTop: height * 0.015,
    height: height * 0.1,
    width: "100%",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "#fff",
    justifyContent: "space-around",
  },
  orderDetailsContainer: {
    width: "40%",
    justifyContent: "space-evenly",
  },
  orderStatusContainer: {
    width: "30%",
    justifyContent: "space-evenly",
  },
});
