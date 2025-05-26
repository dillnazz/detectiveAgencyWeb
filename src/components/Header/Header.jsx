import React, { useRef, useLayoutEffect } from "react";
import Burger from "../Nav/Burger.jsx";
import Phone from "../../assets/images/phone.svg";
import style from "./header.module.scss";
import "./sticky.scss";

function Header() {
  const headerRef = useRef();

  useLayoutEffect(() => {
    const handleScroll = () => {
      const headerElement = headerRef.current;
      const isSticky = window.scrollY > headerElement.offsetTop;

      if (isSticky) {
        headerElement.classList.add("sticky");
      } else {
        headerElement.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header ref={headerRef}>
        <div className={style.header}>
          <Burger />
          <div className={style.container}>
            <div className={style.container_medium}>
              <img src={Phone} alt="phone" className={style.phone} />
              <div className={style.container_small}>
                <p className={style.number}>+996 504 555 811</p>
                <p className={style.timevisit}>Ежедневно с 8:00 до 22:00</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
