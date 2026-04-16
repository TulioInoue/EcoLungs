import style from "./Navbar.module.css";

import { cities } from "../../functions/dynamoDB";

export default function Navbar() {
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
        <div className={style.navbar__content__mode}>
          <div>
            <span id={style.navbar__content__mode_circle1}></span>
            <span id={style.navbar__content__mode_circle2}></span>

            <div>
              <span
                className={style.navbar__content__mode_spark}
                style={{ rotate: "90deg", bottom: "10px", right: "17.5px" }}
              ></span>
              <span
                className={style.navbar__content__mode_spark}
                style={{ rotate: "60deg" }}
              ></span>
              <span
                className={style.navbar__content__mode_spark}
                style={{ rotate: "120deg" }}
              ></span>
              <span
                className={style.navbar__content__mode_spark}
                style={{ rotate: "180deg" }}
              ></span>
              <span
                className={style.navbar__content__mode_spark}
                style={{ rotate: "240deg" }}
              ></span>
              <span
                className={style.navbar__content__mode_spark}
                style={{ rotate: "300deg" }}
              ></span>
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
}
