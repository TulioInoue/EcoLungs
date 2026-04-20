import style from "./Hero.module.css";

import WorldMap from "./graphs/WorldMap.tsx";

interface HeroInterface {
  theme: boolean;
}

export default function Hero({ theme }: HeroInterface) {
  return (
    <article id={theme ? style.hero__lighter : style.hero__darker}>
      <section className={style.hero__header}>
        <h1>About</h1>
        <p>
          In an increasingly urbanized world, the air we breathe has become a
          critical determinant of public health. This project was developed to
          bridge the gap between atmospheric data engineering and preventative
          healthcare, providing real-time monitoring and actionable health
          insights for 100 strategic cities across the globe.
        </p>
      </section>
      <section className={style.hero__content}>
        <div>
          {/* <h2>Introduction</h2>
          <p>
            The cities chosen in this study are divided in those categories
            bellow:
          </p> */}
          <ul>
            <li>
              <strong>
                Megacities and Industrial Hubs (High Pollutant Density):
              </strong>
              <p>
                These areas are characterized by massive vehicular traffic and
                concentrated manufacturing zones. Tracking these over time is
                essential to observe how urban growth and transport policies
                directly correlate with baseline levels of CO and NO2.
              </p>
            </li>

            <li>
              <strong>
                Cities in Valleys or Basins (Thermal Inversion Effect):
              </strong>
              <p>
                Geographic barriers in these cities often trap cold air and
                pollutants near the surface. Long-term monitoring allows us to
                identify seasonal patterns where "pockets" of toxic air persist
                for days, which is critical for predicting acute respiratory
                crisis events.
              </p>
            </li>

            <li>
              <strong>
                Borders and Satellite Regions (Pollutant Transport):
              </strong>
              <p>
                Located on the fringes of major industrial zones, these cities
                help us understand "transboundary pollution." Evaluating this
                data over time reveals how winds and atmospheric currents carry
                gases from one region to another, affecting communities far from
                the original source.
              </p>
            </li>

            <li>
              <strong>
                Specific Activity Foci (Oil, Industry, and Mining):
              </strong>
              <p>
                These locations are dominated by specific heavy industries.
                Continuous data collection is vital to monitor chemical spikes
                (such as SO2) related to industrial cycles, helping to link
                environmental degradation to specific local economic activities.
              </p>
            </li>

            <li>
              <strong>
                Control Cities (Low Pollution/Baseline Comparison):
              </strong>
              <p>
                Selected for their pristine air quality and favorable geography,
                these cities serve as the scientific "control group." Tracking
                them over time provides a benchmark for "natural" atmospheric
                levels, making the severity of pollution in other categories
                more evident and measurable.
              </p>
            </li>
          </ul>
        </div>
        <WorldMap
          areaColor={theme ? "#fafaf8" : "#808488"}
          pointColor={theme ? "#d27b31" : "#ffcd5f"}
        />
      </section>
      <section className={style.hero__about}>
        <h2>About</h2>
        <p></p>
      </section>
    </article>
  );
}
