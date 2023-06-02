//STYLES IMPORTADOS
import style from "./Home.module.css";

//CARDS IMPORTADOS
import { CardPerson } from "../User/CardPerson";
import { CardContato, Delete, Update } from "../Contato/CardContatos";

//ICONS IMPORTADOS
import { BsFillTrash3Fill } from "react-icons/bs";
import { IoPencil, IoSearchOutline, IoAdd } from "react-icons/io5";
import { useEffect, useState } from "react";
import { api, server } from "../../api/axios";

export function Home() {
  let [persons, setPersons] = useState([]);
  let [valor, setValor] = useState("");

  useEffect(() => {
    Load();
  }, []);

  async function Load() {
    const temp = await server.get("user/");

    setPersons(temp.data);
    console.log({ persons });
  }

  async function Adicionar() {
    event.preventDefault();

    const resultAPI = await api.get("/");

    const user = resultAPI.data.results[0];

    const nomeCompleto = `${user.name.first} ${user.name.last}`;
    const avatar = user.picture.large;
    const cell = user.cell;

    await server.post("user/", {
      name: nomeCompleto,
      avatar: avatar,
      celular: cell,
    });

    Load();
  }

  async function Deletar() {
    event.preventDefault();

    Delete();
    Load();
  }

  function Pesquisar() {
    event.preventDefault();

    if (valor === "") {
      Load();
    } else {
      console.log(`Nome procurado: ${valor}`);
      let results = [];

      persons.map((person) => {
        if (person.name.toLowerCase().includes(valor.toLowerCase())) {
          results.push(person);
          return;
        }
      });

      console.log({ results });
      setPersons(results);
    }
  }

  async function Editar() {
    event.preventDefault();

    const resultAPI = await api.get("/");

    const user = resultAPI.data.results[0];

    Update(user);
    Load();
  }

  return (
    <div className={style.container}>
      <CardPerson
        cover="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fhdqwalls.com%2Fwallpapers%2Fone-piece-anime-artwork-i6.jpg&f=1&nofb=1&ipt=5792e97a3f8b9c12805a82deed154d950997d3771765c0125e76d3c29c758b14&ipo=images"
        avatar="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fde%2F41%2F75%2Fde41752587e2d6d950b1d38bdb8917b8.jpg&f=1&nofb=1&ipt=fee2be9497ea3323b04cf200dbad289822e0d9c3512a2f316d41e9fb651d7aae&ipo=images"
        name="Thales A. Girotto"
        office="Dev Front-End"
      />

      <div className={style.contatos}>
        <div className={style.controles}>
          <form>
            <div className={style.headerContatos}>
              <h1 className={style.title}>Meus Contatos:</h1>
              <div className={style.buttons}>
                <button className={style.buttomAdd} onClick={Adicionar}>
                  {" "}
                  <IoAdd />{" "}
                </button>
                <button className={style.buttomEdit} onClick={Editar}>
                  {" "}
                  <IoPencil />{" "}
                </button>
                <button className={style.buttomRemove} onClick={Deletar}>
                  {" "}
                  <BsFillTrash3Fill />{" "}
                </button>
              </div>
            </div>

            <div className={style.pesquisa}>
              <button className={style.buttomPesquisa} onClick={Pesquisar}>
                {" "}
                <IoSearchOutline />{" "}
              </button>

              <input
                type="text"
                name="pesquisa"
                className={style.inputPesquisa}
                placeholder="Procure pelo nome de contato."
                value={valor}
                onChange={() => {
                  setValor(event.target.value);
                }}
              />
            </div>
          </form>
        </div>

        <div className={style.listaContatos}>
          <div className={style.listaCatalogo}>
            <h1 className={style.letraCatalogo}>All</h1>
            <div className={style.contatoCatalogo}>
              {persons.map((person, index) => (
                <CardContato
                  key={index}
                  avatar={person.avatar}
                  name={person.name}
                  celular={person.celular}
                  id={person.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
