import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView, Pressable, SafeAreaView } from "react-native";

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState("workouts");

  return (
    <SafeAreaView style={styles.container}>
      {/* Profile with larger picture */}
      <View style={styles.profileSection}>
        <View style={styles.profileCircle} />
        <Text style={styles.name}>Gavin Cruz</Text>
      </View>

      {/* Quick actions */}
      <View style={styles.quickActions}>
        <Pressable style={styles.actionBtn}>
          <Text style={styles.actionText}>⚡ Adaptive Coach</Text>
        </Pressable>
        <Pressable style={styles.actionBtn}>
          <Text style={styles.actionText}>📊 Progress Dashboard</Text>
        </Pressable>
        <Pressable style={styles.actionBtn}>
          <Text style={styles.actionText}>🍎 Meal Log</Text>
        </Pressable>
      </View>

      {/* Tabs (Workouts / Macros) */}
      <View style={styles.tabRow}>
        <Pressable 
          style={[styles.tab, activeTab === "workouts" && styles.activeTab]} 
          onPress={() => setActiveTab("workouts")}
        >
          <Text style={[styles.tabText, activeTab === "workouts" && styles.activeTabText]}>Workouts</Text>
        </Pressable>
        <Pressable 
          style={[styles.tab, activeTab === "macros" && styles.activeTab]} 
          onPress={() => setActiveTab("macros")}
        >
          <Text style={[styles.tabText, activeTab === "macros" && styles.activeTabText]}>Macros</Text>
        </Pressable>
      </View>

      {/* Content */}
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
        {activeTab === "macros" ? (
          <>
            <View style={styles.macroRow}>
              <Text style={styles.macroLabel}>Calories: 0.0 kcal</Text>
              <Text style={styles.goalText}>Goal: 2,289 kcal</Text>
            </View>
            <View style={styles.macroRow}>
              <Text style={styles.macroLabel}>Protein: 0.0 g</Text>
              <Text style={styles.goalText}>Goal: 171.0 g</Text>
            </View>
            <View style={styles.macroRow}>
              <Text style={styles.macroLabel}>Carb: 0.0 g</Text>
              <Text style={styles.goalText}>Goal: 114.0 g</Text>
            </View>
            <View style={{ ...styles.macroRow, borderBottomWidth: 0 }}>
              <Text style={styles.macroLabel}>Fats: 0.0 g</Text>
              <Text style={styles.goalText}>Goal: 85.0 g</Text>
            </View>
          </>
        ) : (
          <View style={styles.workoutContent}>
            <Text style={styles.workoutTitle}>Today's Workout</Text>
            <View style={styles.workoutCard}>
              <Text style={styles.workoutName}>Upper Body Strength</Text>
              <Text style={styles.workoutDetail}>4 exercises • 45 minutes</Text>
              <Pressable style={styles.startButton}>
                <Text style={styles.startButtonText}>Start Workout</Text>
              </Pressable>
            </View>
            <Text style={styles.sectionTitle}>Recent Workouts</Text>
            <View style={styles.recentWorkout}>
              <Text style={styles.recentWorkoutName}>Lower Body</Text>
              <Text style={styles.recentWorkoutDate}>Completed yesterday</Text>
            </View>
            <View style={styles.recentWorkout}>
              <Text style={styles.recentWorkoutName}>Cardio</Text>
              <Text style={styles.recentWorkoutDate}>Completed 2 days ago</Text>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#F7FAFC",
  },

  // Profile with larger picture
  profileSection: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  profileCircle: {
    width: 100, // Increased from 80
    height: 100, // Increased from 80
    borderRadius: 50, // Increased from 40
    backgroundColor: "#A0AEC0",
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2D3748",
  },

  // Quick actions
  quickActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  actionBtn: {
    backgroundColor: "#EDF2F7",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 8,
    flex: 1,
    marginHorizontal: 6,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  actionText: {
    color: "#4A5568",
    fontSize: 12,
    fontWeight: "600",
  },

  // Tabs
  tabRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  tab: {
    backgroundColor: "#E2E8F0",
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#CBD5E0",
  },
  activeTab: {
    backgroundColor: "#4A5568",
    borderColor: "#4A5568",
  },
  tabText: {
    color: "#718096",
    fontWeight: "600",
  },
  activeTabText: {
    color: "white",
    fontWeight: "700",
  },

  // Content
  scroll: { flex: 1 },
  scrollContent: { 
    paddingHorizontal: 16, 
    paddingBottom: 16,
    paddingTop: 10,
  },
  macroRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
    backgroundColor: "white",
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.03,
    shadowRadius: 2,
    elevation: 1,
  },
  macroLabel: { color: "#2D3748", fontSize: 14, fontWeight: "500" },
  goalText: { color: "#718096", fontSize: 14 },
  
  // Workout Content
  workoutContent: {
    paddingTop: 10,
  },
  workoutTitle: {
    color: "#2D3748",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
  },
  workoutCard: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  workoutName: {
    color: "#2D3748",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  workoutDetail: {
    color: "#718096",
    fontSize: 14,
    marginBottom: 16,
  },
  startButton: {
    backgroundColor: "#4A5568",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  startButtonText: {
    color: "white",
    fontWeight: "600",
  },
  sectionTitle: {
    color: "#2D3748",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 16,
  },
  recentWorkout: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.03,
    shadowRadius: 2,
    elevation: 1,
  },
  recentWorkoutName: {
    color: "#2D3748",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
  },
  recentWorkoutDate: {
    color: "#718096",
    fontSize: 12,
  },
});