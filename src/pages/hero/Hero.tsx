import style from "./Hero.module.css";

import MapChart from "../../components/navbar/graphs/Map";

interface heroInterface {
  theme: boolean;
}

import { cities, mapColor } from "../../data/data";

export default function Hero({ theme }: heroInterface) {
  return (
    <article id={theme ? style.hero__light : style.hero__dark}>
      <h1>about</h1>
      <section className={style.hero__introduction}>
        <h2>introduction</h2>
        <p>
          In an increasingly urbanized world, the air we breathe has become a
          critical determinant of public health. This project was developed to
          bridge the gap between atmospheric data engineering and preventative
          healthcare, providing real-time monitoring and actionable health
          insights for <strong>100 strategic</strong> cities across the globe.
        </p>
      </section>
      <section className={style.hero__cities}>
        <div className={style.hero__cities__content}>
          <h2>the cities</h2>
          <p>
            Therefore, those cities where chosen based on some characteristics
            that may affect air condition in terms of pollution and,
            consequently, health. In total, we aimed for 4 categories in total:
          </p>
        </div>
        <div className={style.hero__cities__graph}>
          <div className={style.hero__cities__graph_header}></div>
          <div className={style.hero__cities__graph_map}>
            <MapChart
              data={cities}
              areaColor={
                theme
                  ? mapColor.lighter_map_background
                  : mapColor.darker_map_background
              }
              pointColor={
                theme
                  ? mapColor.lighter_secondary_color
                  : mapColor.darker_secondary_color
              }
              titleColor={
                theme
                  ? mapColor.lighter_text_dark_color
                  : mapColor.darker_text_light_color
              }
              titleText="Cities data collected"
            />
          </div>
        </div>
        <div></div>
      </section>
    </article>
  );
}
