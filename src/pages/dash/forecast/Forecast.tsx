import style from "./Forecast.module.css";

import { countGroupByData } from "../../../data/functions";
import { type weatherDataInterface } from "../../../data/functions";

import cloudy from "/icons/cloudy.svg";
import raining from "/icons/rain.svg";
import sunny from "/icons/sunny.svg";

interface forecastInterface {
  theme: boolean;
  data: weatherDataInterface[];
}

export default function Forecast({ theme, data }: forecastInterface) {
  function handleTransformForecast(key: string): string {
    if (["clear", "sun"].some((word) => key.toLowerCase().includes(word)))
      return "sunny";
    if (
      ["rain", "snow", "light", "storm", "shower", "drizzle", "thund"].some(
        (word) => key.toLowerCase().includes(word),
      )
    )
      return "raining";
    else return "cloudy";
  }

  const weatherSummary = countGroupByData(
    data,
    "condition",
    handleTransformForecast,
  ).sort((a, b) => b.name.localeCompare(a.name));

  const weatherIcons = {
    sunny: sunny,
    cloudy: cloudy,
    raining: raining,
  };

  return (
    <section className={theme ? style.forecast__light : style.forecast__dark}>
      <p className={style.forecast__title}>monthly weather</p>
      <div className={style.forecast__card}>
        {weatherSummary.map((weather, key) => (
          <div key={key} className={style.forecast__card__item}>
            <img
              src={weatherIcons[weather.name as keyof typeof weatherIcons]}
            ></img>
            <div>
              <b>{((100 * weather.value) / data.length).toFixed(2)} %</b>
              <p>{weather.name} rate</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
