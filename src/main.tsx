import "./index.css";
import "./cssVariables.module.css";

import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import Navbar from "./components/navbar/Navbar";
import Hero from "./pages/hero/Hero";
import Dash from "./pages/dash/dash";

function App() {
  const [theme, setTheme] = useState<boolean>(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Navbar
              theme={theme}
              onThemeChange={() => setTheme((current) => !current)}
            />
          }
        >
          <Route index element={<Hero theme={theme} />} />
          <Route path="about" element={<Hero theme={theme} />} />
          <Route path="dash" element={<Dash theme={theme} />} />
          <Route path="*" element={<Navigate to="/about" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
