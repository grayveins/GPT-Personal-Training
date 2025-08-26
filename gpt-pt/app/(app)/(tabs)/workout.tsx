// app/(tabs)/workout.tsx
import { SafeAreaView, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const C = {
  bg: "#F7FAFC",        // light background
  card: "#FFFFFF",      // white cards
  text: "#1A202C",      // dark gray text
  sub: "#4A5568",       // medium gray for labels
  line: "#E2E8F0",      // light gray border
  accent: "#4A5568",    // grey accent
};

const DAYS = [
  {
    title: "DAY 1",
    items: [
      "Goblet squats • 3×9 75lbs   Pull-ups • 12/12/9 bodyweight",
      "Hip thrusts • 9/9/9 60lbs   RDL • 6/6/6 30lbs",
    ],
  },
  {
    title: "DAY 2",
    items: [
      "Long-distance run • 8km",
      "Mobility circuit • 90/90s, hip flexor, thoracic openers",
    ],
  },
  { title: "DAY 3", items: ["Sled push/pull • 3 sets × 160lbs", "Face pulls • 3×15"] },
];

export default function Workout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: C.bg }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 32 }}
      >
        {/* CTA */}
        <TouchableOpacity
          activeOpacity={0.9}
          style={{
            backgroundColor: C.accent,
            paddingVertical: 12,
            borderRadius: 10,
            alignItems: "center",
            marginTop: 8,
          }}
        >
          <Text style={{ color: "#FFF", fontWeight: "700" }}>⚡ Your Workout Coach</Text>
        </TouchableOpacity>

        {/* Section header */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 20,
            marginBottom: 12,
          }}
        >
          <Text style={{ color: C.text, fontSize: 20, fontWeight: "700" }}>
            Add Current Workouts →
          </Text>
          <TouchableOpacity
            style={{
              width: 34,
              height: 34,
              borderRadius: 17,
              backgroundColor: C.card,
              borderWidth: 1,
              borderColor: C.line,
              alignItems: "center",
              justifyContent: "center",
              shadowColor: "#000",
              shadowOpacity: 0.05,
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 4,
              elevation: 2,
            }}
          >
            <Ionicons name="add" size={20} color={C.text} />
          </TouchableOpacity>
        </View>

        {/* Day lists */}
        {DAYS.map((day, idx) => (
          <View key={idx} style={{ marginBottom: 20 }}>
            <Text style={{ color: C.sub, fontWeight: "700", marginBottom: 8 }}>
              {day.title}
            </Text>
            {day.items.map((line, i) => (
              <View
                key={i}
                style={{
                  backgroundColor: C.card,
                  borderRadius: 10,
                  paddingVertical: 14,
                  paddingHorizontal: 14,
                  marginBottom: 10,
                  borderWidth: 1,
                  borderColor: C.line,
                }}
              >
                <Text style={{ color: C.text }}>{line}</Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

