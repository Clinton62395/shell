import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function LandingPge() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/product pictureq.png")}
        style={styles.picture}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Misao</Text>
        <Text>
          Mua bán và trải nghiệm sản phẩm cây trồng {"\n"} trên khắp mọi vùng
          miền tại Việt Nam
        </Text>

        <TouchableOpacity style={styles.buttonAbove}>
          <Text
            style={styles.buttonTitle}
            onPress={() => router.push("/products/productsList")}
          >
            Đăng nhập{" "}
          </Text>
        </TouchableOpacity>

        <Text style={styles.link}>Chưa có tài khoản</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  picture: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    overflow: "hidden",
  },
  content: {
    flex: 1,
    alignItems: "center",
    marginVertical: 10,
    gap: 10,
  },
  title: {
    fontSize: 44,
    fontWeight: "400",
    letterSpacing: 4,
    color: "#006623",
  },
  buttonAbove: {
    backgroundColor: "#000",
    width: 300,
    padding: 10,
    borderRadius: 10,
  },
  buttonTitle: {
    color: "#ddd",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
  },
  link: {
    color: "#000",
    marginTop: 50,
    textDecorationLine: "underline",
    fontWeight: "500",
    fontSize: 16,
  },
});
