import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Dash from "./components/dash/dash";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <Dash />
  </StrictMode>,
);
