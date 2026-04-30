import style from "./dash.module.css";

import { type searchInterface } from "./search/Search";

import Search from "./search/Search";
import Intro from "./intro/Intro";
import Forecast from "./forecast/Forecast";
import Weather from "./weather/Weather";
import Gases from "./gases/Gases";

export default function Dash({
  theme,
  date,
  city,
  data,
  handleDateFunction,
  handleCityFunction,
}: searchInterface) {
  return (
    <article id={theme ? style.dash__light : style.dash__dark}>
      <h1>dashboard</h1>
      <section className={style.dash__search}>
        <Search
          theme={theme}
          date={date}
          handleDateFunction={handleDateFunction}
          city={city}
          handleCityFunction={handleCityFunction}
          data={data}
        />
        <hr />
      </section>
      {data?.length ? (
        <section className={style.dash__content}>
          <Intro theme={theme} data={data} city={city} />
          <Forecast theme={theme} data={data} />
          <Weather theme={theme} data={data} />
          <Gases theme={theme} data={data} />
        </section>
      ) : (
        <div className={style.dash__noContent}>
          <img src={"/icons/error.svg"} alt="error" />
          <p>No data collected for this period</p>
        </div>
      )}
    </article>
  );
}
