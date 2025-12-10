import { useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProductDetails() {
  const { image, title, price, description } = useLocalSearchParams();

  return (
    <SafeAreaView>
      <StatusBar style="dark" />

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* IMAGE */}
        <Image style={styles.image} source={image} />

        {/* CONTENT */}
        <View style={styles.card}>
          <Text style={styles.price}>
            {price} <Text style={styles.currency}>NGN</Text>
          </Text>
          <Text style={styles.title}>{title}</Text>

          <Text style={styles.description}>{description}</Text>

          {/* BUTTON */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Acheter maintenant</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F7FA",
  },

  image: {
    width: "100%",
    height: 350,
    resizeMode: "cover",
  },

  card: {
    backgroundColor: "#fff",
    padding: 20,
    marginTop: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },

  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 10,
    color: "#222",
  },

  price: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "600",
    color: "#1A8917",
    marginBottom: 10,
  },

  currency: {
    fontSize: 16,
  },

  description: {
    fontSize: 16,
    lineHeight: 22,
    color: "#555",
    marginBottom: 25,
  },

  button: {
    backgroundColor: "#99ECCE",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "600",
  },
});
