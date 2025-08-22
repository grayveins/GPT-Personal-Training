import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#4A5568", // Matches the top header bar
          borderTopColor: "#2D3748", // Darker border for contrast
          height: 60,
        },
        tabBarActiveTintColor: "#FFFFFF", // White for active items
        tabBarInactiveTintColor: "#CBD5E0", // Light gray for inactive items
        tabBarLabelStyle: { 
          fontSize: 12, 
          fontWeight: "600",
          marginBottom: 4,
        },
        tabBarItemStyle: {
          paddingVertical: 6,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons 
              name="home" 
              size={22} 
              color={color} 
              style={{ 
                marginBottom: -2,
                transform: [{ scale: focused ? 1.1 : 1 }]
              }} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="food-log"
        options={{
          title: "Food Log",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons 
              name="restaurant" 
              size={22} 
              color={color} 
              style={{ 
                marginBottom: -2,
                transform: [{ scale: focused ? 1.1 : 1 }]
              }} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="workout-log"
        options={{
          title: "Workout Log",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons 
              name="barbell" 
              size={22} 
              color={color} 
              style={{ 
                marginBottom: -2,
                transform: [{ scale: focused ? 1.1 : 1 }]
              }} 
            />
          ),
        }}
      />
    </Tabs>
  );
}