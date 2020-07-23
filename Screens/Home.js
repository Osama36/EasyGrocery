import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TextInput,
  Button,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import ItemCard from "../Components/ItemCard";
import ShopCard from "../Components/ShopCard";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SliderBox } from "react-native-image-slider-box";

const { width, height } = Dimensions.get("window");
images = [
  require("../assets/img1.jpg"),
  require("../assets/img2.jpg"),
  require("../assets/img3.jpg"),
  require("../assets/img4.jpg"),
  require("../assets/img5.jpg"),
];

export default function Home({ navigation }) {
  return (
    <View style={styles.mainCont}>
      <View style={styles.header}>
        <MaterialIcons
          style={styles.icon}
          name="menu"
          size={30}
          style={styles.icon}
          onPress={() => navigation.openDrawer()}
        />

        <View style={styles.searchBar}>
          <TextInput
            style={styles.headerText}
            placeholder="abc,Lane 5, DHA, Phase 5, Karachi"
          ></TextInput>
        </View>
      </View>
      <View style={styles.carouselContainer}>
        <SliderBox
          images={images}
          autoplay
          circleLoop
          sliderBoxHeight={"100%"}
          parentWidth={width * 0.95}
          resizeMethod={"resize"}
          resizeMode={"cover"}
        />
      </View>

      <View style={styles.cardParentContainer}>
        <Text
          style={{ fontSize: height * 0.03, paddingVertical: height * 0.01 }}
        >
          Recommended For You
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <View style={styles.cardContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Item")}>
              <ItemCard
                name="King's Mart"
                rating="4.2"
                price="250"
                delivery="Free Delivery"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.cardContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Item")}>
              <ItemCard
                name="John's Mart"
                rating="4.2"
                price="250"
                delivery="Free Delivery"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          height: height * 0.32,
          width: width,
          marginTop: height * 0.06,
        }}
      >
        <Text style={{ fontSize: height * 0.03 }}>All Shops (120)</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Shop")}>
          <ShopCard />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainCont: {
    width,
    height,
    backgroundColor: "#e4ede6",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  header: {
    width: "100%",
    height: height * 0.1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#c74b36",
  },
  icon: {
    width: "15%",
    alignItems: "center",
    color: "#fff",
  },
  searchBar: {
    width: "78%",
    height: "30%",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  headerText: {
    fontSize: width * 0.03,
  },
  carouselContainer: {
    height: height * 0.25,
    width: "95%",
    backgroundColor: "white",
    marginTop: height * 0.01,
  },
  cardParentContainer: {
    width: "100%",
    height: height * 0.25,
  },
  cardContainer: {
    width: "45%",
  },
});
