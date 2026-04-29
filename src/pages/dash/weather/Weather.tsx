import style from "./Weather.module.css";
import colors from "../../../cssVariables.module.css";

import usa from "/icons/usa.svg";
import world from "/icons/world.svg";

import Modal from "../../../components/modal/Modal";
import BarLineChart from "../../../components/graphs/BarLine";
import {
  type weatherDataInterface,
  sumByLastUpdatedBar,
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
  const [hour, setHour] = useState<string>();
  const [modal, setModal] = useState<boolean>();

  const hours = Array.from({ length: 24 }, (_, i) =>
    i.toString().padStart(2, "0").concat(":00"),
  );

  const dailyStats = sumByLastUpdatedBar(
    data.filter((e) =>
      hour === undefined ? e : e.last_updated.split(" ")[1] === hour.toString(),
    ),
    "last_updated",
    units.bar,
    units.line,
  );

  const xAxisData = Object.keys(dailyStats);
  const avgTempData = xAxisData.map((date) =>
    (dailyStats[date].barSum / dailyStats[date].count).toFixed(1),
  );
  const avgPrecipData = xAxisData.map((date) =>
    (dailyStats[date].lineSum / dailyStats[date].count).toFixed(3),
  );

  return (
    <section className={theme ? style.weather__light : style.weather__dark}>
      {modal && (
        <Modal
          theme={theme}
          document={document.getElementById("modal")!}
          OnExitFunction={() => setModal(false)}
        >
          <div
            id={theme ? style.modal__light : style.modal__dark}
            className={style.weather__hours}
          >
            <p>Select an hour</p>
            <div>
              {hours.map((number) => (
                <span
                  className={
                    hour === number
                      ? style.weather__hours_selected
                      : style.weather__hours_unselected
                  }
                  key={number}
                  onClick={() => {
                    setHour((current) =>
                      current === number ? undefined : number,
                    );
                    setModal(false);
                  }}
                >
                  {number}
                </span>
              ))}
            </div>
          </div>
        </Modal>
      )}
      <div className={style.weather__buttons}>
        <div className={style.weather__buttons_hour}>
          <p>Hour selected:</p>
          <span onClick={() => setModal(true)}>{hour ? hour : "All"}</span>
        </div>
        <div className={style.weather__buttons__units}>
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
      </div>
      <div className={style.weather__graph}>
        <BarLineChart
          title={`${hour === undefined ? "Average - " : ""}Temperature vs Precipitation${hour === undefined ? "" : ` (${hour})`}`}
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
      </div>
    </section>
  );
}
