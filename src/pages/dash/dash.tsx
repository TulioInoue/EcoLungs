import style from "./dash.module.css";

import { type searchInterface } from "./search/Search";

import Search from "./search/Search";

export default function Dash({
  theme,
  date,
  city,
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
        />
        <hr />
      </section>
    </article>
  );
}
