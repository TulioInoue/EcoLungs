import style from "./Loading.module.css";

import { createPortal } from "react-dom";

interface loadingInterface {
  theme: boolean;
}

export default function Loading({ theme }: loadingInterface) {
  return createPortal(
    <aside id={theme ? style.loading__light : style.loading__dark}>
      <div className={style.loading__background} />
      <div className={style.loading__content}>
        <span className={style.loading__content__span_1} />
        <span className={style.loading__content__span_2} />
        <span className={style.loading__content__span_3} />
      </div>
    </aside>,
    document.getElementById("loading")!,
  );
}
