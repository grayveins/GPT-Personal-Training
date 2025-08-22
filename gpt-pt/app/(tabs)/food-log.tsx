import React, { useState } from "react";
import { 
  StyleSheet, 
  View, 
  Text, 
  ScrollView, 
  SafeAreaView,
  TouchableOpacity,
  TextInput
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function FoodLogScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>GPT Personal Training</Text>
      </View>

      {/* Page Title with Add Button */}
      <View style={styles.titleSection}>
        <Text style={styles.pageTitle}>Food Log</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={24} color="white" />
          <Text style={styles.addButtonText}>Add Food</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#718096" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search foods..."
            placeholderTextColor="#A0AEC0"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Search Results */}
        <View style={styles.resultsSection}>
          <Text style={styles.resultItem}>S4M8016-7455-ab0e-aibc-f3ab4fd3ffc</Text>
          <Text style={[styles.resultItem, styles.foodItem]}>Chipotle Bowl</Text>
          <Text style={styles.resultItem}>Lean fit protein shake</Text>
          <Text style={styles.resultItem}>MBFPGAWH/BJ4PPG7DLF5g</Text>
          <Text style={styles.resultItem}>whole wheat slices</Text>
        </View>

        {/* Lean Fit Protein Section */}
        <View style={styles.foodSection}>
          <Text style={styles.sectionHeader}>Lean Fit Protein</Text>
          <Text style={styles.resultItem}>0314ca8e-7H0-4139-b208-94c741793704</Text>
        </View>

        {/* Hawaiian Bun Section */}
        <View style={styles.foodSection}>
          <Text style={styles.sectionHeader}>Hawaiian bun</Text>
          <Text style={styles.resultItem}>1fb897c7-3076-4623-a123-74371374a303</Text>
        </View>

        {/* Lean Fit Protein Shake Section */}
        <View style={styles.foodSection}>
          <Text style={styles.sectionHeader}>Lean fit protein shake</Text>
          <Text style={styles.resultItem}>dJCkD097CefuMi8q8.Vkg</Text>
          <Text style={styles.resultItem}>whole wheat slices</Text>
        </View>

        {/* Quick Actions */}
        <View style={styles.actionsSection}>
          <Text style={styles.sectionHeader}>Quick Actions</Text>
          <View style={styles.actionItem}>
            <Ionicons name="add-circle" size={16} color="#4A5568" style={styles.actionIcon} />
            <Text style={styles.actionText}>Add Custom Food</Text>
          </View>
          <View style={styles.actionItem}>
            <Ionicons name="time" size={16} color="#4A5568" style={styles.actionIcon} />
            <Text style={styles.actionText}>Recent Meals</Text>
          </View>
          <View style={styles.actionItem}>
            <Ionicons name="star" size={16} color="#4A5568" style={styles.actionIcon} />
            <Text style={styles.actionText}>Favorites</Text>
          </View>
        </View>

        {/* Daily Summary */}
        <View style={styles.summarySection}>
          <Text style={styles.sectionHeader}>Daily Summary</Text>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Calories:</Text>
            <Text style={styles.summaryValue}>0 / 2,289</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Protein:</Text>
            <Text style={styles.summaryValue}>0g / 171g</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Carbs:</Text>
            <Text style={styles.summaryValue}>0g / 114g</Text>
          </View>
          <View style={[styles.summaryItem, styles.summaryItemLast]}>
            <Text style={styles.summaryLabel}>Fat:</Text>
            <Text style={styles.summaryValue}>0g / 85g</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#F7FAFC",
  },
  header: {
    backgroundColor: "#4A5568",
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#2D3748",
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  titleSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
  },
  pageTitle: {
    color: "#2D3748",
    fontSize: 24,
    fontWeight: "bold",
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4A5568",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    gap: 8,
  },
  addButtonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
  },
  scroll: { 
    flex: 1,
  },
  scrollContent: { 
    padding: 20,
    paddingTop: 0,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 50,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#2D3748",
  },
  resultsSection: {
    marginBottom: 24,
  },
  foodSection: {
    marginBottom: 24,
    paddingLeft: 8,
    borderLeftWidth: 3,
    borderLeftColor: "#4A5568",
  },
  sectionHeader: {
    color: "#2D3748",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  resultItem: {
    color: "#718096",
    fontSize: 16,
    marginBottom: 8,
    paddingLeft: 8,
  },
  foodItem: {
    color: "#2D3748",
    fontWeight: "600",
  },
  actionsSection: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  actionItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  actionIcon: {
    marginRight: 12,
  },
  actionText: {
    color: "#4A5568",
    fontSize: 16,
  },
  summarySection: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  summaryItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },
  summaryItemLast: {
    borderBottomWidth: 0,
  },
  summaryLabel: {
    color: "#718096",
    fontSize: 16,
  },
  summaryValue: {
    color: "#4A5568",
    fontSize: 16,
    fontWeight: "500",
  },
});