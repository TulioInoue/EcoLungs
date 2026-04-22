import Navbar from "./components/navbar/Navbar";
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
      <Dash />
    </>
  );
}
