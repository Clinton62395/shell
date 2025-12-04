import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  return (
    <ImageBackground
      source={require("@/assets/images/backround image.png")}
      style={styles.container}
      imageStyle={styles.backround}
    >
      <Image source={require("@/assets/images/logo.png")} style={styles.logo} />
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <View style={styles.overlay}></View>

      <View style={styles.footerContent}>
        <Text style={styles.title}>Plan your</Text>
        <Text style={styles.text}>Luxurious {"\n"} Vacation</Text>
        <TouchableOpacity style={styles.containerButton}>
          <Text style={styles.buttonText}>Explore</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignContent: "center",
    width: "100%",
    height: "100%",
  },
  backround: {
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  logo: {
    alignItems: "center",
    height: 120,
    justifyContent: "center",
    alignSelf: "center",
    width: 120,
    resizeMode: "contain",
  },
  text: {
    color: "white",
    fontSize: 33,
    marginHorizontal: 5,
    fontWeight: "900",
  },
  title: {
    color: "white",
    fontSize: 20,
    marginVertical: 5,
    marginHorizontal: 5,
    fontWeight: "300",
  },
  containerButton: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#176FF2",
    borderRadius: 24,
    marginTop: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
    textAlign: "center",
  },
  footerContent: {
    marginTop: 350,
    marginLeft: 10,
  },
});
