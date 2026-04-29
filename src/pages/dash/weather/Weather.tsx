import style from "./Weather.module.css";
import colors from "../../../cssVariables.module.css";

import usa from "/public/icons/usa.svg";
import world from "/public/icons/world.svg";

import BarLineChart from "../../../components/graphs/BarLine";
import {
  type weatherDataInterface,
  sumByLastUpdated,
} from "../../../data/functions";

import { useState } from "react";

interface weatherInterface {
  theme: boolean;
  data: weatherDataInterface[];
}

export default function Weather({ theme, data }: weatherInterface) {
  const [units, setUnits] = useState<{
    bar: keyof weatherDataInterface;
    line: keyof weatherDataInterface;
    img: string;
  }>({ bar: "temp_c", line: "precip_mm", img: usa });

  const dailyStats = sumByLastUpdated(
    data,
    "last_updated",
    units.bar,
    units.line,
  );

  const xAxisData = Object.keys(dailyStats);
  const avgTempData = xAxisData.map((date) =>
    (dailyStats[date].barSum / dailyStats[date].count).toFixed(1),
  );
  const avgPrecipData = xAxisData.map((date) =>
    (dailyStats[date].lineSum / dailyStats[date].count).toFixed(2),
  );

  return (
    <section className={theme ? style.weather__light : style.weather__dark}>
      <div className={style.weather__buttons}>
        <span
          className={
            units.bar === "temp_c"
              ? style.weather__buttons_selected
              : style.weather__buttons_unselected
          }
          onClick={() =>
            setUnits({ bar: "temp_c", line: "precip_mm", img: usa })
          }
        >
          <img src={world} alt={world} />
          Overall
        </span>
        <span
          className={
            units.bar === "temp_f"
              ? style.weather__buttons_selected
              : style.weather__buttons_unselected
          }
          onClick={() =>
            setUnits({ bar: "temp_f", line: "precip_in", img: world })
          }
        >
          <img src={usa} alt={usa} />
          America
        </span>
      </div>
      <BarLineChart
        title="Average - Temperature vs Precipitation"
        textColor={
          theme ? colors.lighterTextDarkColor : colors.darkerTextLightColor
        }
        tooltipBackground={
          theme ? colors.darkerMapBackground : colors.darkerMapBackground
        }
        xAxis={xAxisData}
        barData={avgTempData}
        lineData={avgPrecipData}
        barColor={
          theme ? colors.lighterPrimaryColor : colors.darkerPrimaryColor
        }
        lineColor={
          theme ? colors.lighterSecondaryColor : colors.darkerSecondaryColor
        }
        barTooltipName="Temperature"
        lineTooltipName="Precipitation"
        barTooltipUnit={units.bar === "temp_c" ? "°C" : "°F"}
        lineTooltipUnit={units.line === "precip_mm" ? "mm" : "in"}
      />
    </section>
  );
}
