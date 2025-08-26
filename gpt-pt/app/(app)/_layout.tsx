// app/(app)/_layout.tsx
import { Drawer } from "expo-router/drawer";
import { View, TouchableOpacity, Text, SafeAreaView, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, router } from "expo-router";
import { supabase } from "../../lib/supabase";

const COLORS = {
  headerBg: "#4A5568",
  screenBg: "#F7FAFC",
  border: "#E2E8F0",
  textDark: "#2D3748",
  textSub: "#718096",
};

function CustomHeader() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.headerBg }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 16,
          paddingVertical: 12,
          backgroundColor: COLORS.headerBg,
          paddingTop: Platform.OS === "ios" ? 0 : 12,
        }}
      >
        <TouchableOpacity onPress={() => navigation.dispatch({ type: "OPEN_DRAWER" })}>
          <Ionicons name="menu" size={28} color="white" />
        </TouchableOpacity>

        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
          GPT Personal Training
        </Text>

        <View style={{ width: 28 }} />
      </View>
    </SafeAreaView>
  );
}

function CustomDrawerContent(props: any) {
  const onSignOut = async () => {
    await supabase.auth.signOut();
    props.navigation.closeDrawer?.();
    router.replace("/sign-in"); // bounce out of the authenticated area
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.screenBg }}>
      {/* Mini profile / actions */}
      <View
        style={{
          padding: 20,
          borderBottomWidth: 1,
          borderBottomColor: COLORS.border,
          backgroundColor: "#EDF2F7",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 12 }}>
          <View style={{ width: 56, height: 56, borderRadius: 28, backgroundColor: "#A0AEC0", marginRight: 12 }} />
          <View>
            <Text style={{ color: COLORS.textDark, fontSize: 16, fontWeight: "700" }}>User</Text>
            <Text style={{ color: COLORS.textSub, fontSize: 13 }}>example@domain.com</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={onSignOut}
          style={{
            borderWidth: 1,
            borderColor: COLORS.headerBg,
            borderRadius: 10,
            paddingVertical: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ color: COLORS.headerBg, fontWeight: "700" }}>Sign Out</Text>
        </TouchableOpacity>
      </View>

      {/* Add drawer links later if you want */}
    </SafeAreaView>
  );
}

export default function AuthenticatedLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.screenBg }}>
      <Drawer
        screenOptions={{
          header: () => <CustomHeader />,
          drawerStyle: { backgroundColor: COLORS.screenBg, width: 300 },
          drawerActiveTintColor: COLORS.textDark,
          drawerInactiveTintColor: COLORS.textSub,
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        {/* Expose the TABS group inside the drawer */}
        <Drawer.Screen
          name="(tabs)"
          options={{ title: "Home" }}
        />
      </Drawer>
    </View>
  );
}
