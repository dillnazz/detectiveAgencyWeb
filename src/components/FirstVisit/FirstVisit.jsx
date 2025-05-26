import style from "./firstvisit.module.scss";
import Chat from "../../assets/images/chat.svg";
import Car from "../../assets/images/car.svg";
import Users from "../../assets/images/users.svg";
import VideoChat from "../../assets/images/videochat.svg";

export default function FirstVisit() {
  return (
    <>
      <section className={style.container}>
        <h3 className={style.h3}>Как мы помогаем нашим клиентам</h3>
        <div className={style.right}>
          <div className={style.blok}>
            <img src={Chat} alt="chat" className={style.img} />
            <div className={style.blokinside}>
              <p className={style.title}>
                Личное общение в офисе компании
              </p>
              <ul className={style.ul}>
                {/* <li>Не требуется никаких документов</li> */}
                <li>Возможность использовать маску для сохранения анонимности</li>

                <li>Полная конфиденциальность, без записи на аудио или видео</li>
              </ul>
            </div>
          </div>

          <div className={style.blok}>
            <img src={Car} alt="car" className={style.img} />
            <div className={style.blokinside}>
              <p className={style.title}>Консультация на месте</p>
              <ul className={style.ul}>
                <li>Возможность проведения консультации на вашей территории</li>
                <li>Учет ваших условий для комфортной встречи</li>
                <li>Конфиденциальность, без записи разговора</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
