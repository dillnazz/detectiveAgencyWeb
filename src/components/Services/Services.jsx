import style from "./services.module.scss";
import { Link } from "react-router-dom";
import cards from "../../components/Card/cards";
import Card from "../../components/Card/Card.jsx";

import Vectorright from "../../assets/svg/Vectorright.jsx";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function Services() {
  return (
    <>
      <section className={style.container}>
        <div className={style.services__header}>
          <h3>Услуги</h3>
          <ul>
          </ul>
          <Link to="/services_for_individuals">
          </Link>
        </div>

        <Splide
          options={{
            perPage: 4,
            breakpoints: {
              1280: {
                perPage: 3,
              },
              744: {
                perPage: 2,
                arrows: false,
              },
              480: {
                perPage: 1,
                height: 490,
                gap: 16,
                arrows: false,
              },
            },
            perMove: 1,
            rewind: true,
            autoWidth: true,
            height: 560,
            pagination: false,
            arrows: true,
            type: "loop",
            gap: 20,
          }}
          aria-label="Services"
          className={style.custom_splide}
        >
          {cards.map((card) => (
            <SplideSlide
              key={card.id}
              style={{
                display: "flex",
                justifyContent: "center",
                columnGap: 20,
                alignItems: "center",
              }}
            >
              <Card
                title={card.title}
                text={card.text}
                price={card.price}
              ></Card>
            </SplideSlide>
          ))}
        </Splide>
      </section>
    </>
  );
}
