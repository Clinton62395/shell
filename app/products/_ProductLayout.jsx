import { Stack } from "expo-router";

export default function ProductLayout() {
  return (
    <Stack
      screenOptions={{ headerShown: false, animation: "slide_from_right" }}
    >
      <Stack.Screen name="landingpage" options={{ headerShown: false }} />
      <Stack.Screen name="productsList" />
      <Stack.Screen name="productDetails" />
      <Stack.Screen name="homeScreen" />
      <Stack.Screen name="paymentButton" />
    </Stack>
  );
}
