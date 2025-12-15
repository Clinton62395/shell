import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const products = [
    {
      title: "Bring Happiness Local Food with Mangano",
      image: require("@/assets/images/image1.png"),
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      buttonLeft: "Skip tour",
      buttonRight: "Get started",
      alreadyAccount: "Already have account?",
      loginLink: "Login",
    },
  ];

  
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={products}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>

            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.buttonOutline}>
                <Text style={styles.buttonOutlineText}>{item.buttonLeft}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonFilled}>
                <Text style={styles.buttonFilledText}>{item.buttonRight}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.loginRow}>
              <Text style={styles.loginText}>{item.alreadyAccount}</Text>
              <TouchableOpacity>
                <Text style={styles.loginLink}>{item.loginLink}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  card: {
    alignItems: "center",
    marginTop: 40,
  },
  image: {
    resizeMode: "cover",
    flex: 1,
    width: "100%",
    height: 250,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#333",
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    color: "#666",
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  buttonRow: {
    paddingHorizontal: 20,

    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  buttonOutline: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#aaa",
    paddingVertical: 12,
    marginRight: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonOutlineText: {
    color: "#333",
    fontWeight: "600",
  },
  buttonFilled: {
    flex: 1,
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    marginLeft: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonFilledText: {
    color: "#fff",
    fontWeight: "600",
  },
  loginRow: {
    paddingHorizontal: 20,
    flexDirection: "row",
    marginTop: 10,
  },
  loginText: {
    color: "#666",
    marginRight: 5,
  },
  loginLink: {
    color: "#4CAF50",
    fontWeight: "bold",
  },
});
