import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Profile from "./components/Profile";

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Profile />
    </div>
  );
}
