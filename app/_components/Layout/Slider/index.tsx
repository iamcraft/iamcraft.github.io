import style from "./slider.module.scss";

type Props = {
  text: string;
  backgroundURL: string;
  buttonText: string;
};

export default function Slider(props: Props) {
  return (
    <div
      className={style.wrapper}
      style={{
        backgroundImage: `url(${props.backgroundURL})`,
      }}
    >
      <h3 className={style.sliderLabel}>{props.text}</h3>
      <button className={style.sliderButton}>{props.buttonText}</button>
    </div>
  );
}
