import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import ItemCard from "../Components/ItemCard";
import { FlatList } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");
const sampledata = [
  { title: "Product 1", key: "item1" },
  { title: "Product 2", key: "item2" },
  { title: "Product 3", key: "item3" },
  { title: "Product 4", key: "item4" },
  { title: "Product 5", key: "item5" },
  { title: "Product 6", key: "item6" },
  { title: "Product 7", key: "item7" },
  { title: "Product 8", key: "item8" },
  { title: "Product 9", key: "item9" },
  { title: "Product 10", key: "item10" },
  { title: "Product 11", key: "item11" },
  { title: "Product 12", key: "item12" },
  { title: "Product 13", key: "item13" },
  { title: "Product 14", key: "item14" },
  { title: "Product 15", key: "item15" },
  { title: "Product 16", key: "item16" },
  { title: "Product 17", key: "item17" },
  { title: "Product 18", key: "item18" },
  { title: "Product 19", key: "item19" },
  { title: "Product 20", key: "item20" },
];

export default function Products({ navigation }) {
  return (
    <View style={styles.mainCont}>
      <View style={styles.bg}>
        <MaterialIcons
          name="arrow-back"
          size={width * 0.1}
          onPress={() => navigation.openDrawer()}
          style={{
            position: "absolute",
            left: width * 0.02,
            zIndex: 10,
            color: "#fff",
            top: height * 0.03,
          }}
        />
        <ImageBackground
          source={require("../assets/productbg.png")}
          style={styles.background}
        >
          <Text style={styles.heading}>BROWSE PRODUCTS</Text>
        </ImageBackground>
      </View>

      <View style={styles.searchBar}>
        <TextInput placeholder="abc,Lane 5, DHA, Phase 5, Karachi" />
      </View>

      <View style={styles.flatListContainer}>
        <FlatList
          numColumns={2}
          data={sampledata}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <TouchableOpacity onPress={() => navigation.navigate("Item")}>
                <ItemCard name={item.title} />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainCont: {
    width,
    height,
    backgroundColor: "#c74b36",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
  },
  bg: {
    height: height * 0.15,
    width: "100%",
  },

  background: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: height * 0.03,
    borderBottomWidth: height * 0.003,
    borderBottomColor: "#fff",
    paddingBottom: height * 0.01,
    color: "#fff",
  },
  flatListContainer: {
    width: width,
    backgroundColor: "#c74b36",
    height: height * 0.79,
  },
  itemContainer: {
    height: height * 0.2,
    width: width * 0.45,
    marginHorizontal: width * 0.025,
    marginVertical: height * 0.01,
  },
  searchBar: {
    width: width,
    height: height * 0.06,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
