import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { supabase } from "../lib/supabase";
import { router } from "expo-router";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) return Alert.alert("Login error", error.message);
    router.replace("/(app)/(tabs)");
  };

  return (
    <View style={{ flex:1, backgroundColor:"#F7FAFC", justifyContent:"center", padding:24 }}>
      <Text style={{ color:"#1A202C", fontSize:26, fontWeight:"700", marginBottom:16 }}>
	Welcome back
      </Text>

      <TextInput
	placeholder="Email"
	placeholderTextColor="#718096"
	value={email}
	onChangeText={setEmail}
	autoCapitalize="none"
	keyboardType="email-address"
	style={{
	  backgroundColor:"#FFFFFF",
	  color:"#1A202C",
	  borderRadius:12,
	  padding:14,
	  borderWidth:1,
	  borderColor:"#E2E8F0",
	  marginBottom:10
	}}
      />

      <TextInput
	placeholder="Password"
	placeholderTextColor="#718096"
	value={password}
	onChangeText={setPassword}
	secureTextEntry
	style={{
	  backgroundColor:"#FFFFFF",
	  color:"#1A202C",
	  borderRadius:12,
	  padding:14,
	  borderWidth:1,
	  borderColor:"#E2E8F0",
	  marginBottom:16
	}}
      />

      <TouchableOpacity
	disabled={loading}
	onPress={onLogin}
	style={{
	  backgroundColor:"#4A5568",
	  opacity:loading ? 0.7 : 1,
	  borderRadius:12,
	  padding:14
	}}
      >
	<Text style={{ textAlign:"center", color:"#fff", fontWeight:"700" }}>
	  {loading ? "Logging in…" : "Log in"}
	</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.replace("/sign-up")} style={{ marginTop:12 }}>
	<Text style={{ color:"#4A5568", textAlign:"center" }}>
	  Create an account
	</Text>
      </TouchableOpacity>
    </View>
  );
}

