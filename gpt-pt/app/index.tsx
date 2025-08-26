import { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import { supabase } from "../lib/supabase";

export default function Index() {
  const [dest, setDest] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setDest(data.session ? "/(tabs)" : "/sign-in");
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      setDest(session ? "/(tabs)" : "/sign-in");
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  if (!dest) return null;
  return <Redirect href={dest as any} />;
}
