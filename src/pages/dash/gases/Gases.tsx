import style from "./Gases.module.css";
import colors from "../../../cssVariables.module.css";

import {
  type weatherDataInterface,
  sumByLastUpdatedLine,
  countGroupByData,
} from "../../../data/functions";

import { pollutants } from "../../../data/data";

import { useState } from "react";

import LineChart from "../../../components/graphs/Line";
import DonutChart from "../../../components/graphs/Donut";
import Modal from "../../../components/modal/Modal";
interface gasesInterface {
  theme: boolean;
  data: weatherDataInterface[];
}

export default function Gases({ theme, data }: gasesInterface) {
  const [gases, setGases] = useState<"co" | "no2" | "o3" | "so2">("co");
  const [modal, setModal] = useState<boolean>();
  const [hour, setHour] = useState<string>();

  function setNameRanges(
    number: number | string,
    levels: {
      min: number;
      max: number | null;
      healthStatus: "Good" | "Moderate" | "Unhealthy";
      symptoms: string;
      diseases: string;
    }[],
  ): "Good" | "Moderate" | "Unhealthy" {
    for (let index = 0; index < levels.length; index++) {
      const level = levels[index];
      if (+number >= level.min) return level.healthStatus;
    }
    return "Unhealthy";
  }

  const healthIcons = {
    Good: "fi fi-ss-signal-alt-2",
    Moderate: "fi fi-ss-signal-alt-1",
    Unhealthy: "fi fi-ss-signal-alt",
  };
  const donutColors = {
    Good: "#238d4b",
    Moderate: "#bca600",
    Unhealthy: "#c94f4f",
  };

  const groupValues = countGroupByData(
    data.filter((e) =>
      hour === undefined ? e : e.last_updated.split(" ")[1] === hour.toString(),
    ),
    gases,
    (number: string | number) =>
      setNameRanges(
        number,
        pollutants
          .find((pollutant) => pollutant.id === gases)!
          .levels.sort((a, b) => b.min - a.min),
      ),
  ).map((group) => {
    const newGroup: {
      name: string;
      value: number;
      color: string;
    } = {
      ...group,
      color: "",
    };
    newGroup.color = donutColors[group.name as keyof typeof donutColors];
    return newGroup;
  });

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
          <p>Select a gas:</p>
          <div>
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
      </div>
      <div className={style.gases__content}>
        <div className={style.gases__resume}>
          <div className={style.gases__resume__graph}>
            <DonutChart
              data={groupValues.sort((a, b) => a.color.localeCompare(b.color))}
              title="Health status overall"
              color={groupValues
                .sort((a, b) => a.color.localeCompare(b.color))
                .map((group) => group.color)}
              titleColor={
                theme
                  ? colors.lighterTextDarkColor
                  : colors.darkerTextLightColor
              }
              tooltipBackground={colors.darkerMapBackground}
            />
          </div>
          <div className={style.gases__resume_description}>
            {groupValues
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((group, key) => {
                const results = pollutants
                  .find((pollutant) => pollutant.id === gases)!
                  .levels.find((level) => level.healthStatus === group.name)!;

                return (
                  <div key={key}>
                    <p
                      style={{
                        color:
                          donutColors[group.name as keyof typeof donutColors],
                      }}
                    >
                      <i className={healthIcons[results.healthStatus]} />{" "}
                      {group.name}:
                    </p>
                    <ul>
                      <li>
                        <b>Symptoms</b>: {results.symptoms.toLowerCase()};
                      </li>
                      <li>
                        <b>Diseases</b>: {results.diseases.toLowerCase()}.
                      </li>
                    </ul>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className={style.gases__graph}>
        <LineChart
          xAxis={xAxisData}
          lineData={avgGasData}
          gas={gases}
          labelText="Concentration (µg/m³)"
          tooltipUnit="(µg/m³)"
          title={
            hour
              ? `${gases.toUpperCase()} concentration (${hour})`
              : `Average - ${gases.toUpperCase()} concentration`
          }
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
