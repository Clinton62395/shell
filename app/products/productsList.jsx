import { useRouter } from "expo-router";
import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function Products() {
  const router = useRouter();
  const product = [
    {
      id: "1",
      image: require("@/assets/images/image1.png"),
      price: "$29.99",
      title: "Smart Study Lamp",
      description:
        "A dimmable LED studlamp with adjustale brightness and a flexible neck. Perfect for homework, reading, and late-night studying. Comes with a built-in USB port for charging devices.",
    },
    {
      id: "2",
      image: require("@/assets/images/image2.png"),
      price: "$29.99",
      title: "Smart Study Lamp",
      description:
        "A dimmable LED study lamp with adjustable brightness and a flexible neck. Perfect for homework, reading, and late-night studying. Comes with a built-in USB port for charging devices.",
    },
    {
      id: "3",
      image: require("@/assets/images/image3.png"),
      price: "$29.99",
      title: "Smart Study Lamp",
      description:
        "A dimmable LED study lamp with adjustable brightness and a flexible neck. Perfect for homework, reading, and late-night studying. Comes with a built-in USB port for charging devices.",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />

      <FlatList
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        data={product}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.priceTitle}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
            <Text style={styles.description}>{item.description}</Text>

            <TouchableOpacity
              style={styles.viewButton}
              onPress={() =>
                router.push({
                  pathname: "/products/productDetails",
                  params: {
                    id: item.id,
                    title: item.title,
                    image: item.image,
                    description: item.description,
                    price: item.price,
                  },
                })
              }
            >
              <Text style={styles.viewButtonText}>View product</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    overflow: "hidden", // fond clair
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  productCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 15,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // ombre Android
    alignSelf: "stretch",
  },
  image: {
    width: "100%",

    height: 350,
    resizeMode: "contain",
    borderRadius: 15,
  },
  priceTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2A9D8F",
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
    lineHeight: 20,
  },
  viewButton: {
    backgroundColor: "#99ECCE",
    paddingVertical: 12,
    borderRadius: 15,
    alignItems: "center",
  },
  viewButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
});
