import style from "./dash.module.css";

interface dashInterface {
  theme: boolean;
}

export default function Dash({ theme }: dashInterface) {
  return (
    <article id={theme ? style.dash__light : style.dash__dark}>
      <section></section>
    </article>
  );
}
