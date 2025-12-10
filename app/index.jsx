import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";

export default function Index() {
  // const [isLoading, setIsloading] = React.useState(false);

  const router = useRouter();

  // router.push("landingPage");
  useEffect(() => {
    setTimeout(() => {
      router.push("/products/landingpage");
    }, 3000);
  });

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/Group 1204.png")}
        style={styles.imag}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  imag: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
});
