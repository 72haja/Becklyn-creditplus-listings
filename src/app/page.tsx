"use client"; // This is a client component 👈🏽

import { Header } from "./components/Header";
import { Body } from "./components/Body";

export default function Home() {

  return (
    <div className="grid">
      <Header />
      <Body />
    </div>
  );
}
