import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#4A5568",
          borderTopColor: "#2D3748",
          height: 60,
        },
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#CBD5E0",
        tabBarLabelStyle: { fontSize: 12, fontWeight: "600", marginBottom: 4 },
        tabBarItemStyle: { paddingVertical: 6 },
      }}
    >
      {/* Dashboard (index.tsx) */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name="home"
              size={22}
              color={color}
              style={{ marginBottom: -2, transform: [{ scale: focused ? 1.1 : 1 }] }}
            />
          ),
        }}
      />

      {/* Meal Log (food-log.tsx) */}
      <Tabs.Screen
        name="food-log"
        options={{
          title: "Meal",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name="restaurant"
              size={22}
              color={color}
              style={{ marginBottom: -2, transform: [{ scale: focused ? 1.1 : 1 }] }}
            />
          ),
        }}
      />

      {/* Workout tab — point this to workout.tsx or workout-log.tsx (pick one) */}
      <Tabs.Screen
        name="workout"  // <-- if your file is workout-log.tsx, change this to "workout-log"
        options={{
          title: "Workout",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name="barbell"
              size={22}
              color={color}
              style={{ marginBottom: -2, transform: [{ scale: focused ? 1.1 : 1 }] }}
            />
          ),
        }}
      />

      {/* Chat tab (chat.tsx) */}
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name="chatbubble-ellipses"
              size={22}
              color={color}
              style={{ marginBottom: -2, transform: [{ scale: focused ? 1.1 : 1 }] }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
