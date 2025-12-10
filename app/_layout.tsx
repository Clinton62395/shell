import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="landingPage" options={{ headerShown: false }} />
      <Stack.Screen name="productDetails" />
      <Stack.Screen name="products" />
    </Stack>
  );
}
