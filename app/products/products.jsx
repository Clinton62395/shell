import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Products() {
  const product = [
    {
      id: "1",
      image: require("@/assets/images/image1.png"),
      price: "$29.99",
      title: "Smart Study Lamp",
      description:
        "A dimmable LED study lamp with adjustable brightness and a flexible neck. Perfect for homework, reading, and late-night studying. Comes with a built-in USB port for charging devices.",
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
    <View style={styles.container}>
      <FlatList
        data={product}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image
              source={item.image}
              style={{ width: 300, height: 350, resizeMode: "contain" }}
            />
            <View style={styles.priceTitle}>
              <Text>{item.title}</Text>
              <Text>{item.price}</Text>
            </View>
            <Text>{item.description}</Text>

            <TouchableOpacity style={styles.viewButtton}>
              <Text>View product</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    flexDirection: "column",
    alignItems: "center",
  },
  viewButtton: {
    backgroundColor: "#99ECCE",
    padding: 10,
    borderRadius: 15,
    marginTop: 10,
  },
  priceTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300,
    marginVertical: 5,
  },
});
