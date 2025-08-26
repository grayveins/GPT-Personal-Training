import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });

  try {
    const { text, history } = await req.json();
    if (!text || typeof text !== "string") {
      return new Response(JSON.stringify({ error: "Missing 'text'." }), {
        status: 400, headers: { ...cors, "Content-Type": "application/json" },
      });
    }

    const apiKey = Deno.env.get("OPENAI_API_KEY");
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "No OPENAI_API_KEY set." }), {
        status: 500, headers: { ...cors, "Content-Type": "application/json" },
      });
    }

    const messages = [
      { role: "system", content:
        "You are 'Fit AI Coach'—a concise, friendly fitness & nutrition coach. " +
        "Adapt for injuries, prefer simple progressions, macros in grams, and clear steps."
      },
      ...(Array.isArray(history) ? history : []).map((m: any) => ({
        role: m?.role === "assistant" ? "assistant" : "user",
        content: String(m?.content ?? ""),
      })),
      { role: "user", content: text },
    ];

    const model = Deno.env.get("OPENAI_MODEL") ?? "gpt-4o-mini";

    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ model, messages, temperature: 0.4 }),
    });

    const data = await r.json();
    const reply = data?.choices?.[0]?.message?.content ?? "Sorry, I couldn't generate a reply.";

    return new Response(JSON.stringify({ reply }), {
      headers: { ...cors, "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e?.message ?? e) }), {
      status: 500, headers: { ...cors, "Content-Type": "application/json" },
    });
  }
});

