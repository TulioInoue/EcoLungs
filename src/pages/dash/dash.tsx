import style from "./dash.module.css";

interface dashInterface {
  theme: boolean;
}

import { useState } from "react";

import Search from "./search/Search";

export default function Dash({ theme }: dashInterface) {

  const [data, setData] = useState();

  return (
    <article id={theme ? style.dash__light : style.dash__dark}>
      <h1>dashboard</h1>
      <section className={style.dash__search}>
        <Search theme={theme} />
        <hr />
      </section>
    </article>
  );
}
