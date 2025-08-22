import React, { useState } from "react";
import { 
  StyleSheet, 
  View, 
  Text, 
  ScrollView, 
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Platform
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function FoodLogScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  // Sample food data
  const foodItems = [
    { id: "S4M8016-7455-ab0e-aibc-f3ab4fd3ffc", name: "Chipotle Bowl", type: "food" },
    { id: null, name: "Lean fit protein shake", type: "food" },
    { id: "MBFPGAWH/BJ4PPG7DLF5g", name: "whole wheat slices", type: "food" },
    { id: "0314ca8e-7H0-4139-b208-94c741793704", name: "Lean Fit Protein", type: "category" },
    { id: "1fb897c7-3076-4623-a123-74371374a303", name: "Hawaiian bun", type: "category" },
    { id: "dJCkD097CefuMi8q8.Vkg", name: "Lean fit protein shake", type: "category" },
    { id: null, name: "whole wheat slices", type: "food" },
  ];

  const handleItemPress = (item: any) => {
    console.log("Item selected:", item);
    // Handle food item selection here
  };

  return (
    <SafeAreaView style={styles.container}>

      {/* Page Title with Add Button */}
      <View style={styles.titleSection}>
        <Text style={styles.pageTitle}>Food Log</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={24} color="white" />
          <Text style={styles.addButtonText}>Add Food</Text>
        </TouchableOpacity>
      </View>

      {/* Fixed Quick Actions and Daily Summary */}
      <View style={styles.fixedSection}>
        {/* Quick Actions */}
        <View style={styles.actionsSection}>
          <Text style={styles.sectionHeader}>Quick Actions</Text>
          <TouchableOpacity style={styles.actionItem}>
            <Ionicons name="add-circle" size={16} color="#4A5568" style={styles.actionIcon} />
            <Text style={styles.actionText}>Add Custom Food</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionItem}>
            <Ionicons name="time" size={16} color="#4A5568" style={styles.actionIcon} />
            <Text style={styles.actionText}>Recent Meals</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionItem}>
            <Ionicons name="star" size={16} color="#4A5568" style={styles.actionIcon} />
            <Text style={styles.actionText}>Favorites</Text>
          </TouchableOpacity>
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
      </View>

      {/* Scrollable Search Area */}
      <View style={styles.scrollableSection}>
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
        <ScrollView style={styles.resultsContainer}>
          {foodItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.resultItem,
                item.type === "category" && styles.categoryItem
              ]}
              onPress={() => handleItemPress(item)}
            >
              {item.id && (
                <Text style={styles.itemId}>{item.id}</Text>
              )}
              <Text style={[
                styles.itemName,
                item.type === "category" && styles.categoryName
              ]}>
                {item.name}
              </Text>
              <Ionicons name="chevron-forward" size={20} color="#A0AEC0" style={styles.chevronIcon} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
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
  fixedSection: {
    flexDirection: "row",
    padding: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
    backgroundColor: "#F7FAFC",
  },
  actionsSection: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginRight: 12,
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
  summarySection: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginLeft: 12,
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
  sectionHeader: {
    color: "#2D3748",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
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
  scrollableSection: {
    flex: 1,
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
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#2D3748",
  },
  resultsContainer: {
    flex: 1,
  },
  resultItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  categoryItem: {
    borderLeftWidth: 4,
    borderLeftColor: "#4A5568",
  },
  itemId: {
    color: "#718096",
    fontSize: 12,
    marginRight: 8,
    fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
  },
  itemName: {
    flex: 1,
    color: "#2D3748",
    fontSize: 16,
  },
  categoryName: {
    fontWeight: "600",
    color: "#2D3748",
  },
  chevronIcon: {
    marginLeft: 8,
  },
});