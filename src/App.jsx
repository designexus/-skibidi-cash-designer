import React from "react";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-white">
      <div className="p-6 bg-surface rounded-2xl shadow-xl text-center">
        <img src="/logo.png" alt="Skibidi.cash logo" className="w-24 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-primary">Skibidi.cash</h1>
        <p className="text-accent mt-2">⚡ KYC-free Lightning Wallet for the Meme Era</p>
        <button className="mt-4 px-4 py-2 bg-accent text-black rounded-lg">Get Started</button>
      </div>
    </div>
  );
}