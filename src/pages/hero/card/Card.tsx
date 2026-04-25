import style from "./Card.module.css";

interface CardInterface {
  icon: string;
  text: string;
  isSelected: boolean;
  theme: boolean;
  onClickFunction: () => void;
}

export default function Card({
  icon,
  text,
  isSelected,
  onClickFunction,
  theme,
}: CardInterface) {
  return (
    <div
      id={theme ? style.light : style.dark}
      className={isSelected ? style.card__selected : style.card__unselected}
      onClick={onClickFunction}
    >
      <i id={style.card__selected_icon} className={icon} />
      <p id={style.card__selected_text}>{text}</p>
    </div>
  );
}
