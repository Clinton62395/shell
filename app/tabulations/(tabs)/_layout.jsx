import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function DashboardScreen() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#4FAF5A",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { backgroundColor: "#f8f8f8" },
        headerShown: false,
        lazy: true,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="products"
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
          tabBarBadge: 2,
        }}
      />

      <Tabs.Screen
        name="indexScreen"
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <Ionicons
              name={focused ? "cube" : "cube-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
}
