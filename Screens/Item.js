import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Button,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import ItemCard from "../Components/ItemCard";
import { SliderBox } from "react-native-image-slider-box";

const { width, height } = Dimensions.get("window");

images = [require("../assets/item3.png"), require("../assets/img1.jpg")];

export default function Item({ navigation }) {
  return (
    <View style={styles.mainCont}>
      <View style={styles.background}>
        <SliderBox
          images={images}
          autoplay
          circleLoop
          sliderBoxHeight={"100%"}
          parentWidth={width}
          resizeMethod={"resize"}
          resizeMode={"cover"}
        />
      </View>

      <MaterialIcons
        name="arrow-back"
        size={width * 0.1}
        onPress={() => navigation.goBack()}
        style={{
          position: "absolute",
          left: width * 0.02,
          zIndex: 10,
          color: "#c74b36",
          top: height * 0.03,
        }}
      />

      <View style={styles.itemHead}>
        <Text style={{ fontSize: height * 0.04, color: "#c74b36" }}>
          Item Name
        </Text>
        <Text style={{ fontSize: height * 0.06, color: "#c74b36" }}> 99$</Text>
      </View>
      <View style={styles.itemStore}>
        <MaterialIcons
          name="star"
          size={height * 0.04}
          style={{ color: "#c74b36" }}
        />

        <Text style={{ fontSize: height * 0.03 }}>John's Mart</Text>
      </View>
      <View style={styles.itemDesc}>
        <Text style={{ fontSize: width * 0.035, paddingTop: height * 0.01 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages,
        </Text>
      </View>

      <View style={styles.scroll}>
        <Text
          style={{ fontSize: height * 0.03, marginVertical: height * 0.01 }}
        >
          Similar Item's
        </Text>
        <ScrollView horizontal>
          <View style={{ width: width * 0.43, padding: 5 }}>
            <ItemCard name="Item A" />
          </View>
          <View style={{ width: width * 0.43, padding: 5 }}>
            <ItemCard name="Item B" />
          </View>
          <View style={{ width: width * 0.43, padding: 5 }}>
            <ItemCard name="Item C" />
          </View>
          <View style={{ width: width * 0.43, padding: 5 }}>
            <ItemCard name="Item D" />
          </View>
          <View style={{ width: width * 0.43, padding: 5 }}>
            <ItemCard name="Item E" />
          </View>
        </ScrollView>
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
  background: {
    height: height * 0.3,
    width: "100%",
  },
  itemHead: {
    flexDirection: "row",
    width: "95%",
    justifyContent: "space-between",
  },
  itemStore: {
    width: "95%",
    flexDirection: "row",
  },
  itemDesc: {
    width: "90%",
  },
  scroll: {
    width: "90%",
    height: height * 0.3,
  },
});
