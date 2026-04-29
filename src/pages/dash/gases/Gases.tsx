import style from "./Gases.module.css";
import colors from "../../../cssVariables.module.css";

import {
  type weatherDataInterface,
  sumByLastUpdatedLine,
} from "../../../data/functions";

import { useState } from "react";

import LineChart from "../../../components/graphs/Line";
import Modal from "../../../components/modal/Modal";

interface gasesInterface {
  theme: boolean;
  data: weatherDataInterface[];
}

export default function Gases({ theme, data }: gasesInterface) {
  const [gases, setGases] = useState<"co" | "no2" | "o3" | "so2">("co");
  const [modal, setModal] = useState<boolean>();
  const [hour, setHour] = useState<string>();

  const hours = Array.from({ length: 24 }, (_, i) =>
    i.toString().padStart(2, "0").concat(":00"),
  );

  const dailyStats = sumByLastUpdatedLine(
    data.filter((e) =>
      hour === undefined ? e : e.last_updated.split(" ")[1] === hour.toString(),
    ),
    "last_updated",
    gases,
  );

  const xAxisData = Object.keys(dailyStats);
  const avgGasData = xAxisData.map(
    (date) => +(dailyStats[date].lineSum / dailyStats[date].count).toFixed(2),
  );

  return (
    <section className={theme ? style.gases__light : style.gases__dark}>
      {modal && (
        <Modal
          theme={theme}
          document={document.getElementById("modal")!}
          OnExitFunction={() => setModal(false)}
        >
          <div
            id={theme ? style.modal__light : style.modal__dark}
            className={style.gases__hours}
          >
            <p>Select an hour</p>
            <div>
              {hours.map((number) => (
                <span
                  className={
                    hour === number
                      ? style.gases__hours_selected
                      : style.gases__hours_unselected
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
      <div className={style.gases__buttons}>
        <div className={style.gases__buttons_hour}>
          <p>Hour selected:</p>
          <span onClick={() => setModal(true)}>{hour ? hour : "All"}</span>
        </div>
        <div className={style.gases__buttons__units}>
          <span
            className={
              gases === "co"
                ? style.gases__buttons__units_selected
                : style.gases__buttons__units_unselected
            }
            onClick={() => setGases("co")}
          >
            co
          </span>
          <span
            className={
              gases === "no2"
                ? style.gases__buttons__units_selected
                : style.gases__buttons__units_unselected
            }
            onClick={() => setGases("no2")}
          >
            no₂
          </span>
          <span
            className={
              gases === "so2"
                ? style.gases__buttons__units_selected
                : style.gases__buttons__units_unselected
            }
            onClick={() => setGases("so2")}
          >
            so₂
          </span>
          <span
            className={
              gases === "o3"
                ? style.gases__buttons__units_selected
                : style.gases__buttons__units_unselected
            }
            onClick={() => setGases("o3")}
          >
            o₃
          </span>
        </div>
      </div>
      <div className={style.gases__graph}>
        <LineChart
          xAxis={xAxisData}
          lineData={avgGasData}
          gas={gases}
          labelText="Concentration (µg/m³)"
          tooltipUnit="(µg/m³)"
          title={hour ? `${gases.toUpperCase()} concentration (${hour})` : `Average - ${gases.toUpperCase()} concentration`}
          lineColor={
            theme ? colors.lighterSecondaryColor : colors.darkerSecondaryColor
          }
          textColor={
            theme ? colors.lighterTextDarkColor : colors.darkerTextLightColor
          }
          tooltipBackground={
            theme ? colors.darkerMapBackground : colors.darkerMapBackground
          }
        />
      </div>
    </section>
  );
}
