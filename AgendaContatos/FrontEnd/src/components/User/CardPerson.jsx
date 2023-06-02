import React from "react";

import stylePerson from "./CardPerson.module.css";

export function CardPerson({ cover, avatar, name, office, stacks }) {
  return (
    <div className={stylePerson.card}>
      <img src={cover} alt="Cover" />
      <img className={stylePerson.avatar} src={avatar} alt="Avatar" />
      <p className={stylePerson.p1}>{name}</p>
      <p className={stylePerson.p2}>{office}</p>

      <div className={stylePerson.spans}>
        <span>CSS3</span>
        <span>JavaScript</span>
        <span>Typescript</span>
        <span>React</span>
        <span>Git</span>
        <span>Node</span>
      </div>
    </div>
  );
}