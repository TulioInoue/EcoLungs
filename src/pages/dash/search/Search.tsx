import style from "./Search.module.css";

export interface searchInterface {
  theme: boolean;
  date: { year: number; month: number };
  city: string;
  handleDateFunction: (period: "year" | "month", value: number) => void;
  handleCityFunction: (city: string) => void;
}

import { useState } from "react";

import { monthNames, cities } from "../../../data/data";

import Modal from "../../../components/modal/Modal";

export default function Search({
  theme,
  date,
  city,
  handleDateFunction,
  handleCityFunction,
}: searchInterface) {
  const [modal, setModal] = useState<boolean>();

  return (
    <div className={theme ? style.search__light : style.search__dark}>
      {modal && (
        <Modal
          theme={theme}
          document={document.getElementById("modal")!}
          OnExitFunction={() => setModal(false)}
        >
          <div
            id={theme ? style.search__light : style.search__dark}
            className={style.search__modal}
          >
            <div className={style.search__modal_header}>
              <h3>Choose a city</h3>
              <i className="fi fi-ss-circle-xmark"></i>
            </div>
            <div className={style.search__modal_city}>
              {cities
                .map((city) => city.name)
                .sort()
                .map((element, key) => (
                  <button
                    key={key}
                    className={
                      element === city
                        ? style.search__modal_city_selected
                        : style.search__modal_city_unselected
                    }
                    onClick={() => {
                      handleCityFunction(element);
                      setModal(false);
                    }}
                  >
                    {element}
                  </button>
                ))}
            </div>
          </div>
        </Modal>
      )}
      <div className={style.search__city}>
        <h2>About </h2>
        <span onClick={() => setModal(true)}>
          <p>{city}</p>
          <i className="fi fi-ss-search"></i>
        </span>
      </div>
      <div className={style.search__date}>
        <div className={style.search__date__month}>
          <i
            onClick={() => handleDateFunction("month", -1)}
            className="fi fi-ss-caret-left"
          ></i>
          <p>{monthNames[date.month]}</p>
          <i
            onClick={() => handleDateFunction("month", 1)}
            className="fi fi-ss-caret-right"
          ></i>
        </div>
        <div className={style.search__date__year}>
          <i
            onClick={() => handleDateFunction("year", -1)}
            className="fi fi-ss-caret-left"
          ></i>
          <p>{date.year}</p>
          <i
            onClick={() => handleDateFunction("year", 1)}
            className="fi fi-ss-caret-right"
          ></i>
        </div>
      </div>
    </div>
  );
}
