import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default function ShopCard() {
  return (
    <View style={styles.bigCard}>
      <Image
        style={styles.cardImage}
        source={require("../assets/item3.png")}
      ></Image>
      <Text style={{ fontSize: width * 0.05, paddingLeft: width * 0.02 }}>
        John's Mart
      </Text>
      <View style={{ flexDirection: "row" }}>
        <MaterialIcons
          style={styles.icon}
          name="star"
          size={30}
          style={styles.icon}
        />
        <Text>4.2 (1 k+)</Text>
      </View>
      <View style={{ flexDirection: "row", paddingLeft: width * 0.02 }}>
        <Text>C$. 250 minimum | </Text>
        <Text>Free Delivery</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bigCard: {
    height: "95%",
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
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
    alignItems: "center",
    color: "orange",
  },
});
