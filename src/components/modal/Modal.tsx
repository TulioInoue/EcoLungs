import style from "./Modal.module.css";

import { type ReactNode } from "react";
import { createPortal } from "react-dom";

interface ModalInterface {
  theme: boolean;
  OnExitFunction: () => void;
  document: HTMLElement;
  children: ReactNode;
}

export default function Modal({
  theme,
  document,
  OnExitFunction,
  children,
}: ModalInterface) {
  return createPortal(
    <aside id={theme ? style.modal__light : style.modal__night}>
      <section onClick={OnExitFunction} className={style.modal__background} />
      <section className={style.modal__content}>{children}</section>
    </aside>,
    document,
  );
}
