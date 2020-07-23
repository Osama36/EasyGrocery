import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");

export default function ItemCard({ name, rating, price, delivery }) {
  return (
    <View style={styles.card}>
      <Image
        style={styles.cardImage}
        source={require("../assets/item1.jpg")}
      ></Image>
      <Text style={{ fontSize: width * 0.045, paddingLeft: width * 0.02 }}>
        {name}
      </Text>
      <View style={{ flexDirection: "row", paddingLeft: width * 0.01 }}>
        <MaterialIcons
          style={styles.icon}
          name="star"
          size={width * 0.05}
          style={styles.icon}
        />
        <Text>{rating} (1 k+)</Text>
      </View>
      <Text style={{ paddingLeft: width * 0.02 }}>C$. {price} minimum</Text>
      <Text style={{ paddingLeft: width * 0.02 }}>{delivery}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "#fff",
  },
  cardImage: {
    height: "50%",
    width: "100%",
  },
  icon: {
    color: "orange",
  },
});
