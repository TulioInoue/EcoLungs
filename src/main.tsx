import "./index.css";
import "./cssVariables.module.css";

import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import Navbar from "./components/navbar/Navbar";
import Hero from "./pages/hero/Hero";
import Dash from "./pages/dash/Dash";

import {
  handleFetchWeatherData,
  type weatherDataInterface,
} from "./data/functions";

function App() {
  const [theme, setTheme] = useState<boolean>(true);
  const [data, setData] = useState<weatherDataInterface[]>();
  const [loading, setLoading] = useState<boolean>(true);
  // For feacth data:
  const [city, setCity] = useState<string>("Sao Paulo");
  const [date, setDate] = useState({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });

  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      const formattedDate = `${date.year}-${(date.month + 1).toString().padStart(2, "0")}`;
      const newData = await handleFetchWeatherData(formattedDate, city);

      if (!ignore && newData) {
        setData(newData);
      }
      setLoading(false);
    };
    setLoading(true);
    fetchData();

    return () => {
      ignore = true;
    };
  }, [city, date]);

  function handleDate(period: "year" | "month", value: number) {
    setDate((currentDate) => {
      const newDate = { ...currentDate };
      newDate[period] += value;

      if (newDate["month"] > 11) {
        newDate.year += 1;
        newDate.month = 0;
      }
      if (newDate["month"] < 0) {
        newDate.year -= 1;
        newDate.month = 11;
      }

      return newDate;
    });
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Navbar
              loading={loading}
              theme={theme}
              onThemeChange={() => setTheme((current) => !current)}
            />
          }
        >
          <Route index element={<Hero theme={theme} />} />
          <Route path="about" element={<Hero theme={theme} />} />
          <Route
            path="dash"
            element={
              <Dash
                theme={theme}
                date={date}
                handleDateFunction={handleDate}
                city={city}
                handleCityFunction={setCity}
                data={data}
              />
            }
          />
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
