import style from "./Hero.module.css";
import colors from "../../cssVariables.module.css";

import MapChart from "../../components/graphs/Map";
import Info from "./info/Info";
import Card from "./card/Card";
import Table from "./table/Table";
interface heroInterface {
  theme: boolean;
}

import { cities, summaries } from "../../data/data";

import { useState } from "react";

export default function Hero({ theme }: heroInterface) {
  const [cardSelected, setCardSelected] = useState<string>();

  const cardItens = Array.from(
    new Map(cities.map((city) => [city.icon, city])).values(),
  );

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
            consequently, health. In total, we aimed for{" "}
            <strong>5 categories</strong> in total:
          </p>
        </div>
        <div className={style.hero__cities__graph}>
          <div className={style.hero__cities__graph_map}>
            <MapChart
              data={cities.map((city) => ({
                name: city.name,
                value: [city.lon, city.lat, 1],
                symbolSize:
                  city.type === cardSelected
                    ? colors.pointSelected
                    : colors.pointUnselected,
                color: theme
                  ? city.type === cardSelected
                    ? colors.lighterSecondaryColor
                    : colors.lighterPrimaryColor
                  : city.type === cardSelected
                    ? colors.darkerSecondaryColor
                    : colors.darkerPrimaryColor,
              }))}
              titleColor={
                theme
                  ? colors.lighterTextDarkColor
                  : colors.darkerTextLightColor
              }
              titleText="Cities data collected"
              roam={false}
            />
            <div className={style.hero__cities__graph_map_itens}>
              {cardItens.map((city, key) => (
                <Card
                  key={key}
                  icon={city.icon}
                  text={city.type}
                  isSelected={city.type === cardSelected}
                  theme={theme}
                  onClickFunction={() =>
                    setCardSelected((current) =>
                      current === city.type ? "" : city.type,
                    )
                  }
                />
              ))}
            </div>
          </div>
          {!cardSelected || (
            <Info
              {...summaries.find((summary) => summary.type === cardSelected)!}
              theme={theme}
            />
          )}
        </div>
        <div></div>
      </section>
      <section className={style.hero__data}>
        <h2>the data</h2>
        <p>
          This project implements a robust, serverless <strong>ETL</strong>{" "}
          (Extract, Transform, Load) pipeline designed for real-time
          environmental monitoring. Every hour, an <strong>AWS Lambda</strong>{" "}
          function is triggered via <strong>Amazon EventBridge</strong>, acting
          as the core orchestrator to ingest global atmospheric data from the{" "}
          <strong>WeatherAPI</strong>. The system processes multi-dimensional
          metrics from 100 strategic cities, ensuring high availability and low
          latency. The transformed data is then persisted into{" "}
          <strong>Amazon DynamoDB</strong>, utilizing a schema optimized for
          time-series analysis. By leveraging AWS's scalable infrastructure, the
          project maintains a continuous, cost-effective stream of high-fidelity
          environmental data, bridging the gap between cloud engineering and
          public health intelligence.
        </p>
        <p>
          Since the focus of this project is about how the current air status
          can affect human health, we also have determined some pollutant gas
          ranges symptoms and diseases accordingly to each range, based on{" "}
          <strong>WHO</strong> (World Health Organization).
        </p>
        <Table theme={theme} />
      </section>
      <section className={style.hero__dash}>
        <h2>the dashboard</h2>
        <p>
          The dashboard in another tab will serve as a dynamic gateway to global
          environmental intelligence. Beyond simple data visualization, it is
          designed to offer a multi-layered analysis of atmospheric health
          across diverse urban landscapes. Users will be able to cross-reference
          real-time particle concentration with localized weather patterns,
          enabling a granular view of how climate shifts affect air toxicity. By
          integrating predictive trends and intuitive health risk indicators,
          the platform will transform complex data into a clear, visual
          narrative for a safer, more informed world.
        </p>
      </section>
    </article>
  );
}
