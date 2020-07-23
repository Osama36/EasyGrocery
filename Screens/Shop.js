import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import MapView, { Marker } from "react-native-maps";
import DetailRow from "../Components/DetailRow";

const { width, height } = Dimensions.get("window");

export default function Shop({ navigation }) {
  return (
    <View style={styles.mainCont}>
      <View style={styles.shop}>
        <MaterialIcons
          name="arrow-back"
          size={width * 0.1}
          onPress={() => navigation.goBack()}
          style={{
            position: "absolute",
            left: width * 0.02,
            zIndex: 10,
            color: "#fff",
            top: height * 0.03,
          }}
        />
        <ImageBackground
          source={require("../assets/mart.jpg")}
          style={styles.background}
        >
          <View style={styles.overlay}></View>
          <Text style={styles.martTitle}>JOHNS MART</Text>
          <TouchableWithoutFeedback>
            <View style={styles.deliveryBtn}>
              <Text style={styles.delivery}>Delivery in 45MIN</Text>
            </View>
          </TouchableWithoutFeedback>
          <View
            style={{
              flexDirection: "row",
              position: "absolute",
              bottom: height * 0.05,
            }}
          >
            <MaterialIcons style={{ color: "#fff" }} name="star" size={30} />
            <Text style={styles.rating}>4.2 (1 k+)</Text>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.row}>
        <View style={styles.shopDetails}>
          <Text style={{ fontSize: width * 0.03 }}>SHOP DETAILS</Text>
        </View>
      </View>

      <View style={styles.detailsContainer}>
        <DetailRow
          icon="location-on"
          line1="Shop Address"
          line2="ABC Street 1, Lane 5"
          line3="Toronto, Canada"
        />
        <DetailRow
          icon="access-time"
          line1="Opening Hours"
          line2="MON - THUR 09:00 AM - 08:00 PM"
          line3="FRI - SUN 11:00 AM - 05:00 PM"
        />
        <DetailRow
          icon="call"
          line1="Contact Number"
          line2="+92 123-456-789"
          line3="(021) 123-456-789"
        />
      </View>

      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 24.812337,
            longitude: 67.050668,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
          }}
        >
          <Marker
            coordinate={{ latitude: 24.812337, longitude: 67.050668 }}
            title="DANAT"
          />
        </MapView>
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
  shop: {
    height: height * 0.27,
    width: "100%",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  background: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  martTitle: {
    fontSize: width * 0.07,
    color: "#fff",
    position: "absolute",
    top: height * 0.04,
  },
  deliveryBtn: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  delivery: {
    fontSize: width * 0.03,
    color: "#fff",
  },
  rating: {
    fontSize: width * 0.03,
    color: "#fff",
  },
  row: {
    height: height * 0.06,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#fff",
  },
  shopDetails: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    borderBottomWidth: 3,
    borderBottomColor: "#c74b36",
  },
  detailsContainer: {
    width: "100%",
    height: height * 0.39,
  },
  mapContainer: {
    width: "100%",
    height: height * 0.28,
    backgroundColor: "coral",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
