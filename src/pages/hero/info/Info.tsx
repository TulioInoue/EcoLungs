import style from "./Info.module.css";

interface infoInterface {
  icon: string;
  text: string;
  type: string;
  theme: boolean;
}

export default function Info({ icon, text, type, theme }: infoInterface) {
  return (
    <aside id={theme ? style.light : style.dark}>
      <div>
        <i className={icon} />
        <p>{type}</p>
      </div>
      <p>{text}</p>
    </aside>
  );
}
