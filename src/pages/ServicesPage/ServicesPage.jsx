import React, { useState } from "react";
import style from "./servicespage.module.scss";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";
import { Link } from "react-router-dom";
import { ReactComponent as Person } from "../../assets/images/dashicons_businessman.svg";
import { ReactComponent as Business } from "../../assets/images/dashbusiness-center.svg";
import { ReactComponent as Info } from "../../assets/images/services-chat.svg";
import { ReactComponent as Family } from "../../assets/images/services-family.svg";
import { ReactComponent as Binoculars } from "../../assets/images/services-binoculars.svg";
import { ReactComponent as Search } from "../../assets/images/services-search.svg";
import { ReactComponent as Protect } from "../../assets/images/services-protect.svg";
import { ReactComponent as Journalism } from "../../assets/images/services-journalism.svg";
import { ReactComponent as ArrowDown } from "../../assets/images/biege_arrow_down.svg";


export default function ServicesPage() {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const [showMore2, setShowMore2] = useState(false);

  const handleShowMore2 = () => {
    setShowMore2(!showMore2);
  };

  const [showItems, setShowItems] = useState(false);
  const [isIconUp, setIsIconUp] = useState(false);

  const handleItemClick = () => {
    setShowItems(!showItems);
    setIsIconUp(!isIconUp);
  };

  const [showItems2, setShowItems2] = useState(false);
  const [isIconUp2, setIsIconUp2] = useState(false);

  const handleItemClick2 = () => {
    setShowItems2(!showItems2);
    setIsIconUp2(!isIconUp2);
  };

  const [showItems3, setShowItems3] = useState(false);
  const [isIconUp3, setIsIconUp3] = useState(false);

  const handleItemClick3 = () => {
    setShowItems3(!showItems3);
    setIsIconUp3(!isIconUp3);
  };

  const [showItems4, setShowItems4] = useState(false);
  const [isIconUp4, setIsIconUp4] = useState(false);

  const handleItemClick4 = () => {
    setShowItems4(!showItems4);
    setIsIconUp4(!isIconUp4);
  };

  const [showItems5, setShowItems5] = useState(false);
  const [isIconUp5, setIsIconUp5] = useState(false);

  const handleItemClick5 = () => {
    setShowItems5(!showItems5);
    setIsIconUp5(!isIconUp5);
  };

  const [showItems6, setShowItems6] = useState(false);
  const [isIconUp6, setIsIconUp6] = useState(false);

  const handleItemClick6 = () => {
    setShowItems6(!showItems6);
    setIsIconUp6(!isIconUp6);
  };

  return (
    <>
      <main className={style.container}>
        <section className={style.section_header}>
          <Breadcrumbs />
          <h1 className={style.h1}>Услуги</h1>
          <div className={style.services__tabs}>
          </div>
        </section>
        <section className={style.catalog}>
          <section className={style.blokinfo}>
            <div className={style.tabs__person}>
              <Person alt="person" className={style.icon} />
              Для частных лиц
            </div>
            <h2 className={style.h2}>Сбор информации</h2>
            <Link to="/">
              <p className={style.text}>Досье на человека</p>
            </Link>
            <Link to="/">
              <p className={style.text}>Сбор сведений по гражданским, и по уголовным делам</p>
            </Link>
            <Link to="/">
              <p className={style.text}>Cбор информации о человеке</p>
            </Link>
            <Link to="/">
              <p className={style.text}>Наблюдение за подростком</p>
            </Link>
            <Link to="/">
              <p className={style.text}>Установление образа жизни человека</p>
            </Link>
            <Link to="/">
              <p className={style.text}>Организация слежки</p>
            </Link>
            <Link to="/">
              <p className={style.text}>Поиск без вести пропавших граждан</p>
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
            <div className={style.tabs__person}>
              <Person alt="person" className={style.icon} />
              Для юридических лиц
            </div>
            <h2 className={style.h2}>Сбор информации</h2>
            <Link to="/">
              <p className={style.text}>Сбор сведений по гражданским, и по уголовным делам</p>
            </Link>
            <Link to="/">
              <p className={style.text}>Сбор информации для деловых переговоров</p>
            </Link>
            <Link to="/">
              <p className={style.text}>Выявление некредитоспособных или ненадежных деловых партнеров</p>
            </Link>
            <Link to="/">
              <p className={style.text}>Проверка сотрудников компании</p>
            </Link>
            <Link to="/">
              <p className={style.text}>Сбор информации о компании </p>
            </Link>
            <Link to="/">
              <p className={style.text}>Поиск пропавшего груза</p>
            </Link>
            <Link to="/">
              <p className={style.text}>Контрнаблюдение</p>
            </Link>
          </section>

          <section className={style.blokfamily}>
            <Family alt="Family" className={style.img} />
            <h2 className={style.h2}>Семейные вопросы</h2>
            <Link to="/">
              <p className={style.text}>Проверка образа жизни ребенка </p>
            </Link>
            <Link to="/">
              <p className={style.text}>Проверка на верность</p>
            </Link>
          </section>

          <section className={style.blokprotect}>
            <Protect alt="Protect" className={style.img} />
            <h2 className={style.h2}>Защита и безопасность</h2>
            <Link to="/">
              <p className={style.text}>Защита от шантажа </p>
            </Link>
            <Link to="/">
              <p className={style.text}>Личная безопасность </p>
            </Link>
            <Link to="/">
              <p className={style.text}>Защита от произвола правоохранительных органов  </p>
            </Link>
            <Link to="/">
              <p className={style.text}>Профессиональный
                поиск скрытых камер
                и жучков</p>
            </Link>
            <Link to="/">
              <p className={style.text}>Защита переговоров
                от прослушки и жучков
                </p>
            </Link>
          </section>



          <section className={style.blokbinoculars}>
            <Binoculars alt="Binoculars" className={style.img} />
            <h2 className={style.h2}>Расследования</h2>
            <Link to="/">
              <p className={style.text}>Расследование убийств</p>
            </Link>
            <Link to="/">
              <p className={style.text}>Расследование мошенничества</p>
            </Link>
            <Link to="/">
              <p className={style.text}>Расследование фактов шантажа</p>
            </Link>
            <Link to="/">
              <p className={style.text}>Расследования хищений</p>
            </Link>
          </section>

          <section className={style.bloksearch}>
            <Search alt="Search" className={style.img} />
            {showMore && (
              <div>
                <h2 className={style.h2}>Розыск</h2>
                <Link to="/">
                  <p className={style.text}>Розыск несовершеннолетних</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Розыск имущества наследователя</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Поиск пропавших родственников</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Поиск имущества в банкротстве</p>
                </Link>
              </div>
            )}
            <button onClick={handleShowMore} className={style.button}>
              {showMore ? "Скрыть" : "Ещё 11"}
            </button>
          </section>

        </section>
        <section className={style.catalog_mobile}>




          <div className={style.blok}>
            <div className={style.row}>
              <div className={style.bloksmall}>
                <Info
                  alt="Info"
                  className={style.img}
                  style={{
                    filter: isIconUp ? "brightness(0%) saturate(100%)" : "none",
                    transitionDuration: "0.2s",
                  }}
                />
                <h2 onClick={handleItemClick}
                  style={{
                    transform: isIconUp ? "rotate(0deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }} className={style.h2}>Сбор информации для частных лиц</h2>
              </div>
              <ArrowDown
                onClick={handleItemClick}
                style={{
                  transform: isIconUp ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }} />
            </div>
            {showItems && (
              <div className={style.bloktext}>
                <Link to="/">
                  <p className={style.text}>Досье на человека</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Сбор сведений по гражданским, и по уголовным делам</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Cбор информации о человеке</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Наблюдение за подростком</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Установление образа жизни человека</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Организация слежки</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Поиск без вести пропавших граждан</p>
                </Link>
              </div>
            )}
          </div>

          <div className={style.blok}>
            <div className={style.row}>
              <div className={style.bloksmall}>
                <Journalism
                  alt="Journalism"
                  className={style.img}
                  style={{
                    filter: isIconUp6
                      ? "brightness(0%) saturate(100%)"
                      : "none",
                    transitionDuration: "0.2s",
                  }}
                />
                <h2 onClick={handleItemClick6}
                  style={{
                    transform: isIconUp6 ? "rotate(0deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }} className={style.h2}>Сбор информации для юридических лиц</h2>
              </div>
              <ArrowDown
                onClick={handleItemClick6}
                style={{
                  transform: isIconUp6 ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              />
            </div>
            {showItems6 && (
              <div className={style.bloktext}>
                <Link to="/">
                  <p className={style.text}>Сбор сведений по гражданским, и по уголовным делам</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Сбор информации для деловых переговоров</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Выявление некредитоспособных или ненадежных деловых партнеров</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Проверка сотрудников компании</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Сбор информации о компании</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Поиск пропавшего груза</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Контрнаблюдение</p>
                </Link>
              </div>
            )}
          </div>



          <div className={style.blok}>
            <div className={style.row}>
              <div className={style.bloksmall}>
                <Search
                  alt="Search"
                  className={style.img}
                  style={{
                    filter: isIconUp2
                      ? "brightness(0%) saturate(100%)"
                      : "none",
                    transitionDuration: "0.2s",
                  }}
                />
                <h2 onClick={handleItemClick2}
                  style={{
                    transform: isIconUp2 ? "rotate(0deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }} className={style.h2}>Розыск</h2>
              </div>
              <ArrowDown
                onClick={handleItemClick2}
                style={{
                  transform: isIconUp2 ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              />
            </div>
            {showItems2 && (
              <div className={style.bloktext}>
                <Link to="/">
                  <p className={style.text}>Розыск несовершеннолетних

</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Розыск имущества наследователя</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Поиск пропавших родственников</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Поиск имущества в банкротстве</p>
                </Link>
              </div>
            )}
          </div>

          <div className={style.blok}>
            <div className={style.row}>
              <div className={style.bloksmall}>
                <Family
                  alt="Family"
                  className={style.img}
                  style={{
                    filter: isIconUp3
                      ? "brightness(0%) saturate(100%)"
                      : "none",
                    transitionDuration: "0.2s",
                  }}
                />
                <h2 onClick={handleItemClick3}
                  style={{
                    transform: isIconUp3 ? "rotate(0deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }} className={style.h2}>Семейные вопросы</h2>
              </div>
              <ArrowDown
                onClick={handleItemClick3}
                style={{
                  transform: isIconUp3 ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              />
            </div>
            {showItems3 && (
              <div className={style.bloktext}>
                <Link to="/">
                  <p className={style.text}>Проверка образ жизни детей</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Проверка на верность</p>
                </Link>
              </div>
            )}
          </div>

          <div className={style.blok}>
            <div className={style.row}>
              <div className={style.bloksmall}>
                <Protect
                  alt="Protect"
                  className={style.img}
                  style={{
                    filter: isIconUp4
                      ? "brightness(0%) saturate(100%)"
                      : "none",
                    transitionDuration: "0.2s",
                  }}
                />
                <h2 onClick={handleItemClick4}
                  style={{
                    transform: isIconUp4 ? "rotate(0deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }} className={style.h2}>Защита и безопасность</h2>
              </div>
              <ArrowDown
                onClick={handleItemClick4}
                style={{
                  transform: isIconUp4 ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              />
            </div>
            {showItems4 && (
              <div className={style.bloktext}>
                <Link to="/">
                  <p className={style.text}>Защита от шантажа</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Личная безопасность</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Защита от произвола правоохранительных органов</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Профессиональный поиск скрытых камер и жучков</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Защита переговоров от прослушки и жучков</p>
                </Link>
              </div>
            )}
          </div>

          <div className={style.blok}>
            <div className={style.row}>
              <div className={style.bloksmall}>
                <Binoculars
                  alt="Binoculars"
                  className={style.img}
                  style={{
                    filter: isIconUp5
                      ? "brightness(0%) saturate(100%)"
                      : "none",
                    transitionDuration: "0.2s",
                  }}
                />
                <h2 onClick={handleItemClick5}
                  style={{
                    transform: isIconUp5 ? "rotate(0deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }} className={style.h2}>Расследования</h2>
              </div>
              <ArrowDown
                onClick={handleItemClick5}
                style={{
                  transform: isIconUp5 ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              />
            </div>
            {showItems5 && (
              <div className={style.bloktext}>
                <Link to="/">
                  <p className={style.text}>Расследование убийств

</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Расследование мошенничества</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Расследование фактов шантажа</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Расследования хищений</p>
                </Link>
              </div>
            )}
          </div>


        </section>
      </main>
    </>
  );
}
