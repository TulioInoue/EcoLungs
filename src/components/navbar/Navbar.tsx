import style from "./Navbar.module.css";

interface navbarInterface {
  onThemeChange: () => void;
  theme: boolean;
}

export default function Navbar({ onThemeChange, theme }: navbarInterface) {
  return (
    <nav id={theme ? style.navbar__light : style.navbar__dark}>
      <div className={style.navbar__links}>
        <a href="https://github.com/TulioInoue/EcoLungs">
          <i className="fi fi-brands-github"></i>
        </a>
      </div>
      <section className={style.navbar__shortcuts}>
        <a href="">About</a>
        <a href="">Dash</a>
        <a href="">Table</a>
      </section>
      <div className={style.navbar__search}></div>
      <section className={style.navbar__content}>
        <div
          className={
            theme
              ? style.navbar__content__mode__sun
              : style.navbar__content__mode__night
          }
          onClick={onThemeChange}
        >
          <span
            id={
              theme
                ? style.navbar__content__mode_sun_active
                : style.navbar__content__mode_sun_deactive
            }
          />
          <span
            id={
              theme
                ? style.navbar__content__mode_moon_active
                : style.navbar__content__mode_moon_deactive
            }
          />
        </div>
      </section>
    </nav>
  );
}
