import style from "./App.module.css";

export function App() {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <img
          src="https://images8.alphacoders.com/125/thumbbig-1252336.webp"
          alt="Cover"
        />
        <img
          className={style.avatar}
          src="https://github.com/LightBlue44.png"
          alt="Avatar"
        />
        <p className={style.p1}>Thales A. Girotto</p>
        <p className={style.p2}>Estagiário na TchêInfo</p>
        <div className={style.stack}>
          <span>JavaScript</span >
          <span>Typescript</span>
          <span>Figma</span>
          <span>Docker</span>
          <span>React</span>
          <span>Nestjs</span>
          <span>Node.js</span>
          <span>PostgreSQL</span>
          <span>Git</span>
          <span>Postman</span>
          <span>ReactJs</span>
        </div>
      </div>
    </div>
  );
}