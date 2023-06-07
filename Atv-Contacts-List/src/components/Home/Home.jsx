import { BsFillTrash3Fill } from "react-icons/bs";
import { IoAdd, IoPencil, IoSearchOutline } from "react-icons/io5";
import { CardContato } from "../Contato/CardContatos";
import { CardPerson } from "../User/CardPerson";
import style from "./Home.module.css";
export function Home() {
  return (
    <div className={style.container}>
      <CardPerson
        cover="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Tv5D4kK6ooxiPB4-_f8bOQHaEK%26pid%3DApi&f=1&ipt=b94f69ea7b9f4ccb3eaf31492e9ea2f5bb49ee00d9615535be1b08bf366dc2fe&ipo=images"
        avatar="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F98%2Fc0%2F83%2F98c08367933f07c451a18c4507f011a5.jpg&f=1&nofb=1&ipt=f7479456dec33b8296b0db7895e38c545b0c7dcf013caf3f2c381e99ac997c40&ipo=images"
        name="Thales Alberto Girotto"
        office="FrontEnd Developer"
        stacks="ReactJS, React Native, NodeJS e TypeScript"
      />
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

        <div className={style.listaContatos}>
          <div className={style.listaCatalogo}>
            <h1 className={style.letraCatalogo}>A</h1>
            <div className={style.contatoCatalogo}>
              <CardContato
                avatar="https://pm1.narvii.com/6754/c42f2a66a6b0532b035f4038aacf2bb55693649dv2_hq.jpg"
                name="Anderson Inutilista"
                numero="(12) 9 1234-5678"
              />
            </div>
          </div>

          <div className={style.listaCatalogo}>
            <h1 className={style.letraCatalogo}>O</h1>
            <div className={style.contatoCatalogo}>
              <CardContato
                avatar="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa%2FAATXAJzb1tg6JE-vPAGmwlJGD5PX-Yfk17HT0CV8Ww%3Ds900-c-k-c0xffffffff-no-rj-mo&f=1&nofb=1&ipt=7d0229c087a54ce37121e7b6be49bb6f968ad73b9666a262a5c9170e375bf7c7&ipo=images"
                name="Orochinho Mitinho"
                numero="(69) 9 6969-8080"
              />
            </div>
          </div>

          <div className={style.listaCatalogo}>
            <h1 className={style.letraCatalogo}>R</h1>
            <div className={style.contatoCatalogo}>
              <CardContato
                avatar="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.famousbirthdays.com%2Fheadshots%2Fraluca-granola-5.jpg&f=1&nofb=1&ipt=37a301c07f1508d118e606088ee793792524245a1a94d6c8b0479d032cf4a40b&ipo=images"
                name="Raluquetes Granolaris"
                numero="(09) 9 8765-4321"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
