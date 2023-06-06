import { BsFillTrash3Fill } from "react-icons/bs";
import { IoAdd, IoPencil, IoSearchOutline } from "react-icons/io5";
import { CardContato } from "../Contato/CardContatos";
import { CardPerson } from "../User/CardPerson";
import style from "./Home.module.css";
export function Home() {
  return (
    <div className={style.container}>
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
          <p className={style.p2}>FrontEnd Dev</p>
          <div className={style.stack}>
            <span>JavaScript</span>
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
      <div className={style.contatos}>
        <div className={style.controles}>
          <form>
            <div className={style.headerContatos}>
              <h1 className={style.title}>Lista de Contatos</h1>
              <div className={style.buttons}>
                <button className={style.buttomAdd}>
                  {" "}
                  <IoAdd />{" "}
                </button>
                <button className={style.buttomEdit}>
                  {" "}
                  <IoPencil />{" "}
                </button>
                <button className={style.buttomRemove}>
                  {" "}
                  <BsFillTrash3Fill />{" "}
                </button>
              </div>
            </div>

            <div className={style.pesquisa}>
              <button className={style.buttomPesquisa}>
                {" "}
                <IoSearchOutline />{" "}
              </button>
              <input
                type="text"
                name="pesquisa"
                className={style.inputPesquisa}
              />
            </div>
          </form>
        </div>

        
      </div>
    </div>
  );
}
