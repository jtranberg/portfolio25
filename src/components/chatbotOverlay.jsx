// src/components/ChatbotOverlay.jsx
import { useEffect, useMemo, useRef, useState } from "react";

export default function ChatbotOverlay() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi! I’m JayBot — ask me about Snowman, Soundscapes, Covercraft, or the ERC-4337 wallet." },
  ]);
  const logRef = useRef(null);

  const knowledge = useMemo(() => [
    { keys: ["snowman","project snowman","carbon","co2","iot"], answer:
      "Project Snowman: vehicle-mounted exhaust conditioning & CO₂ capture (ESP32-S3 telemetry, INA219, SCD-30, Dallas OneWire). TRL-5/6 prototyping with custom PCBs and HV ionizer." },
    { keys: ["soundscapes","chill","android","google play","react native"], answer:
      "Soundscapes & Chill: React Native app on Google Play with curated ambient mixes & offline mode." },
    { keys: ["covercraft","lyrics","music","ai","transcribe"], answer:
      "Covercraft: AI lyric generator + rhyme prediction, art upscaler, browser-based transcribe agent (Music21JS, Tone.js, VexFlow)." },
    { keys: ["erc-4337","4337","smart wallet","entrypoint","account abstraction"], answer:
      "ERC-4337 wallet: custom EntryPoint, modular validation, Ethers.js frontend (Sepolia), UserOperation flows." },
  ], []);

  useEffect(() => {
    if (open) logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const onSend = () => {
    const q = input.trim();
    if (!q) return;
    setMessages(m => [...m, { role: "user", text: q }]);
    setInput("");
    const hit = knowledge.find(k => k.keys.some(kw => q.toLowerCase().includes(kw.toLowerCase())))?.answer
      || "I can talk about Snowman, Soundscapes & Chill, Covercraft, the ERC-4337 wallet, or your tech stack.";
    setTimeout(() => setMessages(m => [...m, { role: "bot", text: hit }]), 200);
  };

  return (
    <>
      <button className="btn fab" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-label="Toggle chatbot">
        🤖 JayBot
      </button>

      {open && (
        <div className="chatbot">
          <div className="chatbot-head">
            <strong>JayBot</strong>
            <button className="btn btn-small" onClick={() => setOpen(false)}>✕</button>
          </div>
          <div ref={logRef} className="chatbot-log">
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "msg user" : "msg bot"}>
                <span className="bubble">{m.text}</span>
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && onSend()}
              className="input"
              placeholder="Ask about Snowman, Soundscapes, Covercraft…"
            />
            <button className="btn" onClick={onSend}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}
