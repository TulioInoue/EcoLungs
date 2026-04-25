import style from "./Table.module.css"; // Opcional, use suas classes CSS aqui

import React from "react";

import { pollutants } from "../../../data/data";

interface TableInterface {
  theme: boolean;
}

export default function Table({ theme }: TableInterface) {
  return (
    <table className={theme ? style.table__light : style.table__dark}>
      <thead className={style.table__header}>
        <tr>
          <th>Pollutant</th>
          <th>Concentration (µg/m³)</th>
          <th>Health status</th>
          <th>Primary symptoms</th>
          <th>Associated Diseases</th>
        </tr>
      </thead>
      <tbody className={style.table__body}>
        {pollutants.map((pollutant) =>
          pollutant.levels.map((level, index) => (
            <tr
              key={`${pollutant.id}-${index}`}
              className={style.table__body__light}
            >
              {index === 0 && (
                <td
                  rowSpan={pollutant.levels.length}
                  //   className={style.table__body__dark}
                >
                  <strong>{pollutant.formula}</strong>
                  <br />
                  <span>({pollutant.name})</span>
                </td>
              )}
              <td>
                {level.min} {level.max && `-`} {level.max}
              </td>
              <td>{level.healthStatus}</td>
              <td>{level.symptoms}</td>
              <td>{level.diseases}</td>
            </tr>
          )),
        )}
      </tbody>
    </table>
  );
}
