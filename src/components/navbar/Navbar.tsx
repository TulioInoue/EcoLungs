import style from "./Navbar.module.css";

import { Link, Outlet } from "react-router";

import { useState } from "react";
interface navbarInterface {
  onThemeChange: () => void;
  theme: boolean;
}

export default function Navbar({ onThemeChange, theme }: navbarInterface) {
  const [linkSelected, setLinkSelected] = useState<string>("about");

  return (
    <>
      <nav id={theme ? style.navbar__light : style.navbar__dark}>
        <div className={style.navbar__links}>
          <a href="https://github.com/TulioInoue/EcoLungs">
            <i className="fi fi-brands-github"></i>
          </a>
        </div>
        <section className={style.navbar__shortcuts}>
          <Link
            className={
              linkSelected === "about"
                ? style.navbar__shortcuts_selected
                : style.navbar__shortcuts_unselected
            }
            to="/about"
            onClick={() => setLinkSelected("about")}
          >
            About
          </Link>
          <Link
            className={
              linkSelected === "dash"
                ? style.navbar__shortcuts_selected
                : style.navbar__shortcuts_unselected
            }
            to="/dash"
            onClick={() => setLinkSelected("dash")}
          >
            Dash
          </Link>
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
      <Outlet />
    </>
  );
}
