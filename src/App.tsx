import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Dash from "./components/dash/dash";

import { useState } from "react";

export default function App() {
  const [theme, setTheme] = useState<boolean>(true);
  return (
    <>
      <Navbar
        onThemeChange={() => setTheme((current) => (current ? false : true))}
        theme={theme}
      />
      <Hero theme={theme} />
      <Dash />
    </>
  );
}
