import style from "./Navbar.module.css";

import { cities } from "../../functions/dynamoDB";

interface navbarInterface {
  onThemeChange: () => void;
  theme: boolean;
}

export default function Navbar({ onThemeChange, theme }: navbarInterface) {
  return (
    <nav id={style.navbar}>
      <section className={style.navbar__links}>
        <div>
          <a href="">About</a>
          <a href="">Dash</a>
          <a href="">Table</a>
        </div>
      </section>
      <section className={style.navbar__content}>
        <div className={style.navbar__content__links}>
          <label htmlFor="city">Choose a city:</label>
          <select name="cityOptions" id="city">
            {cities.map((city, key) => (
              <option key={key}>{city}</option>
            ))}
          </select>
        </div>
        <div className={style.navbar__content__brands}>
          <a href="">
            <i className="fi fi-brands-github"></i>
          </a>
          <a href="">
            <i className="fi fi-brands-linkedin"></i>
          </a>
        </div>
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
