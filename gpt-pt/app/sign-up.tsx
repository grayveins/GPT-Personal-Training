import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { supabase } from "../lib/supabase";
import { router } from "expo-router";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignUp = async () => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) return Alert.alert("Sign up error", error.message);
    Alert.alert("Account created", "Check your inbox if email confirmation is required.");
    router.replace("/sign-in");
  };

  return (
    <View style={{ flex:1, backgroundColor:"#F7FAFC", justifyContent:"center", padding:24 }}>
      <Text style={{ color:"#1A202C", fontSize:26, fontWeight:"700", marginBottom:16 }}>
        Create account
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
        onPress={onSignUp}
        style={{ backgroundColor:"#4A5568", borderRadius:12, padding:14 }}
      >
        <Text style={{ textAlign:"center", color:"#fff", fontWeight:"700" }}>Sign up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.replace("/sign-in")} style={{ marginTop:12 }}>
        <Text style={{ color:"#4A5568", textAlign:"center" }}>
          Have an account? Log in
        </Text>
      </TouchableOpacity>
    </View>
  );
}
