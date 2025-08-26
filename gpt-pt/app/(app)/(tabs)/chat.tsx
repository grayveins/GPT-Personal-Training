import { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { supabase } from "../../../lib/supabase";
import { router } from "expo-router";

type Msg = { role: "user" | "assistant"; content: string };

const COLORS = {
  bg: "#F7FAFC",         // light background
  cardAI: "#EDF2F7",     // AI bubbles
  cardUser: "#4A5568",   // user bubbles
  textDark: "#1A202C",
  textSub: "#4A5568",
  textOnAccent: "#FFFFFF",
  inputBg: "#FFFFFF",
  border: "#E2E8F0",
};

export default function Chat() {
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: "Hey! I’m your AI coach. Ask me about workouts or meals." },
  ]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<ScrollView>(null);

  // kick user back if not logged in
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) router.replace("/sign-in");
    });
  }, []);

  const send = async () => {
    const t = text.trim();
    if (!t || loading) return;

    const next = [...messages, { role: "user", content: t }];
    setMessages(next);
    setText("");
    setLoading(true);

    try {
      const res = await fetch(`${process.env.EXPO_PUBLIC_API_BASE}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: t, history: messages }),
      });
      const data = await res.json().catch(() => ({}));
      const reply = data?.reply ?? "Sorry, I couldn’t process that.";
      setMessages([...next, { role: "assistant", content: reply }]);
    } catch (err) {
      setMessages([...next, { role: "assistant", content: "Couldn’t reach the server." }]);
    } finally {
      setLoading(false);
      setTimeout(() => scrollRef.current?.scrollToEnd({ animated: true }), 100);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: COLORS.bg }}
      behavior={Platform.select({ ios: "padding", android: undefined })}
      keyboardVerticalOffset={Platform.select({ ios: 64, android: 0 })}
    >
      {/* Header */}
      <View
        style={{
          paddingHorizontal: 16,
          paddingTop: 14,
          paddingBottom: 10,
          borderBottomWidth: 1,
          borderBottomColor: COLORS.border,
        }}
      >
        <Text style={{ color: COLORS.textDark, fontSize: 20, fontWeight: "700" }}>
          Adaptive Coach
        </Text>
        <Text style={{ color: COLORS.textSub, marginTop: 2 }}>
          Ask me about workouts, meals, or macros
        </Text>
      </View>

      {/* Messages */}
      <ScrollView
        ref={scrollRef}
        contentContainerStyle={{ paddingHorizontal: 12, paddingVertical: 12 }}
        onContentSizeChange={() => scrollRef.current?.scrollToEnd({ animated: true })}
      >
        {messages.map((m, i) => {
          const isUser = m.role === "user";
          return (
            <View
              key={i}
              style={{
                marginBottom: 10,
                alignItems: isUser ? "flex-end" : "flex-start",
              }}
            >
              <View
                style={{
                  maxWidth: "85%",
                  backgroundColor: isUser ? COLORS.cardUser : COLORS.cardAI,
                  paddingVertical: 10,
                  paddingHorizontal: 12,
                  borderRadius: 12,
                }}
              >
                <Text style={{ color: isUser ? COLORS.textOnAccent : COLORS.textDark }}>
                  {m.content}
                </Text>
              </View>
            </View>
          );
        })}
        {loading && (
          <View style={{ alignItems: "flex-start" }}>
            <View
              style={{
                backgroundColor: COLORS.cardAI,
                paddingVertical: 10,
                paddingHorizontal: 12,
                borderRadius: 12,
              }}
            >
              <Text style={{ color: COLORS.textSub }}>Thinking…</Text>
            </View>
          </View>
        )}
      </ScrollView>

      {/* Composer */}
      <View
        style={{
          borderTopWidth: 1,
          borderTopColor: COLORS.border,
          padding: 10,
          backgroundColor: COLORS.bg,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            backgroundColor: COLORS.inputBg,
            borderWidth: 1,
            borderColor: COLORS.border,
            borderRadius: 12,
            paddingHorizontal: 10,
            alignItems: "center",
          }}
        >
          <TextInput
            value={text}
            onChangeText={setText}
            placeholder="Write a message…"
            placeholderTextColor={COLORS.textSub}
            style={{ flex: 1, paddingVertical: 10, color: COLORS.textDark }}
            multiline
          />
          <TouchableOpacity
            onPress={send}
            disabled={!text.trim() || loading}
            style={{
              marginLeft: 8,
              backgroundColor: !text.trim() || loading ? "#CBD5E0" : COLORS.cardUser,
              borderRadius: 10,
              paddingVertical: 8,
              paddingHorizontal: 12,
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "700" }}>
              {loading ? "…" : "Send"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
