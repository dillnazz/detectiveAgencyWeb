import style from "./modalservices.module.scss";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Scrollbar } from "react-scrollbars-custom";
import { ReactComponent as Info } from "../../assets/images/services-chat.svg";
import { ReactComponent as Family } from "../../assets/images/services-family.svg";
import { ReactComponent as Binoculars } from "../../assets/images/services-binoculars.svg";
import { ReactComponent as Search } from "../../assets/images/services-search.svg";
import { ReactComponent as Protect } from "../../assets/images/services-protect.svg";
import { ReactComponent as Journalism } from "../../assets/images/services-journalism.svg";

export default function ModalServices(props) {
  const Check = () => {
    props.stateMenu();
  };

  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const [showMore2, setShowMore2] = useState(false);
  const handleShowMore2 = () => {
    setShowMore2(!showMore2);
  };

  return (
    <div className={style.catalog}>
      <div>
        <div className={style.catalog_inner}>
          <Scrollbar
            style={{
              width: "93vw",
              height: "33vw",
            }}
          >
            <div className={style.catalog_inner2}>
              <section className={style.blokinfo}>
                <Info alt="Info" className={style.img} />
                <h2 className={style.h2}>Сбор информации</h2>
                <Link to="/" onClick={() => Check()}>
                  <p className={style.text}>Досье на человека</p>
                </Link>
                <Link to="/" onClick={() => Check()}>
                  <p className={style.text}>Сбор сведений по гражданским, и по уголовным делам</p>
                </Link>
                 <Link to="/" onClick={() => Check()}>
                  <p className={style.text}>Cбор информации о человеке</p>
                </Link>
                <Link to="/" onClick={() => Check()}>
                  <p className={style.text}>Установление образа жизни человека</p>
                </Link>
                <Link to="/" onClick={() => Check()}>
                  <p className={style.text}>Поиск должника</p>
                </Link>
                <Link to="/" onClick={() => Check()}>
                  <p className={style.text}>Поиск без вести пропавших граждан</p>
                </Link>
                <Link to="/" onClick={() => Check()}>
                  <p className={style.text}>Наблюдение за подростком</p>
                </Link>
                <Link to="/" onClick={() => Check()}>
                  <p className={style.text}>Компромат на человека</p>
                </Link>
                <Link to="/" onClick={() => Check()}>
                  <p className={style.text}>Организация слежки</p>
                </Link>
                <Link
                  onClick={() => Check()}
                  to="/services_for_individuals/geolocation"
                >
                </Link>

                {showMore2 && (
                  <div>
                  </div>
                )}
                <button onClick={handleShowMore2} className={style.button}>
                  {showMore2 ? "Скрыть" : "Ещё 2"}
                </button>
              </section>

              <section className={style.blokfamily}>
                <Family alt="Family" className={style.img} />
                <h2 className={style.h2}>Проверка образа жизни ребенка</h2>
                <Link to="/" onClick={() => Check()}>
                  <p className={style.text}>Проверка на верность</p>
                </Link>
                {/* <Link to="/" onClick={() => Check()}>
                  <p className={style.text}>Проверить на верность</p>
                </Link> */}
              </section>

              <section className={style.blokbinoculars}>
                <Binoculars alt="Binoculars" className={style.img} />
                <h2 className={style.h2}>Расследования</h2>
                <Link to="/" onClick={() => Check()}>
                  <p className={style.text}>Раследование резонанстных дел</p>
                </Link>
                <Link to="/" onClick={() => Check()}>
                  <p className={style.text}>Расследование убийств</p>
                </Link>
                <Link to="/" onClick={() => Check()}>
                  <p className={style.text}>Расследование мошенничества</p>
                </Link>
              </section>

              <section className={style.bloksearch}>
                <Search alt="Search" className={style.img} />
                <h2 className={style.h2}>Розыск</h2>
                <Link to="/" onClick={() => Check()}>
                  <p className={style.text}>Поиск родственников</p>
                </Link>
                <Link to="/" onClick={() => Check()}>
                  <p className={style.text}>Розыск имущества</p>
                </Link>
                <Link to="/" onClick={() => Check()}>
                  <p className={style.text}>Поиск человека по адресу</p>
                </Link>
                <Link to="/" onClick={() => Check()}>
                  <p className={style.text}>Розыск за границей</p>
                </Link>
                <Link to="/" onClick={() => Check()}>
                  <p className={style.text}>Частный розыск</p>
                </Link>
                {showMore && (
                  <div>
                    <Link to="/" onClick={() => Check()}>
                      <p className={style.text}>Розыск несовершеннолетних</p>
                    </Link>
                    <Link to="/" onClick={() => Check()}>
                      <p className={style.text}>
                        Розыск имущества наследователя
                      </p>
                    </Link>
                    <Link to="/" onClick={() => Check()}>
                      <p className={style.text}>
                        Поиск пропавших родственников
                      </p>
                    </Link>
                    <Link to="/" onClick={() => Check()}>
                      <p className={style.text}>
                        Поиск родственников в Израиле
                      </p>
                    </Link>
                    <Link to="/" onClick={() => Check()}>
                      <p className={style.text}>
                        Поиск имущества в банкротстве
                      </p>
                    </Link>
                  </div>
                )}
                <button onClick={handleShowMore} className={style.button}>
                  {showMore ? "Скрыть" : "Ещё 11"}
                </button>
              </section>

              <section className={style.blokprotect}>
                <Protect alt="Protect" className={style.img} />
                <h2 className={style.h2}>Защита и безопасность</h2>
                <Link to="/" onClick={() => Check()}>
                  <p className={style.text}>Поиск прослушки в квартире</p>
                </Link>
                <Link to="/" onClick={() => Check()}>
                  <p className={style.text}>Помощь и защита при шантаже</p>
                </Link>
              </section>

              <section className={style.blokjournalism}>
                <Journalism alt="Journalism" className={style.img} />
                {/* <h2 className={style.h2}>Журналистика</h2>
                <Link to="/" onClick={() => Check()}>
                  <p className={style.text}>Заказать расследование</p>
                </Link> */}
              </section>
            </div>
          </Scrollbar>
        </div>
      </div>
    </div>
  );
}
