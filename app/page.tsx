"use client";

import { useState } from "react";

export default function Home() {
  const [markets, setMarkets] = useState<any[]>([]);

  async function createMarket() {
    const question = prompt("Enter market question:");
    if (!question) return;

    const res = await fetch("/api/markets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });

    const data = await res.json();
    console.log("Created:", data);
    loadMarkets(); // Refresh list
  }

  async function loadMarkets() {
    const res = await fetch("/api/markets");
    const data = await res.json();
    console.log("Loaded:", data);
    setMarkets(data);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-zinc-50 p-8">
      <h1 className="text-3xl font-semibold">Prediction Markets</h1>

      <div className="flex gap-4">
        <button
          onClick={createMarket}
          className="px-4 py-2 bg-black text-white rounded cursor-pointer"
        >
          Create Market
        </button>

        <button
          onClick={loadMarkets}
          className="px-4 py-2 bg-zinc-700 text-white rounded cursor-pointer"
        >
          Load Markets
        </button>
      </div>

      <div className="mt-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-2">Market List</h2>
        {markets.length === 0 ? (
          <p>No markets yet.</p>
        ) : (
          <ul className="list-disc pl-5 space-y-1">
            {markets.map((m, i) => (
              <li key={i}>
                <strong>{m.question}</strong> - {m.status} (
                {new Date(m.createdAt).toLocaleString()})
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
