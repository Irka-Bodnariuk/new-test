import { useState } from "react";

import List from "../list/List";
import sprite from "../../images/sprites.svg";

import styles from "./app.module.css";

function App() {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.headerWrap}>
          <h1 className={styles.title}>Explore Our Property Portfolio</h1>
          <ul className={styles.list}>
            <li className={styles.item}>
              <button
                className={`${styles.filterBtn} ${
                  activeButton === 0 ? styles.active : ""
                }`}
                onClick={() => handleButtonClick(0)}
              >
                Apartments
              </button>
            </li>
            <li>
              <button
                className={`${styles.filterBtn} ${
                  activeButton === 1 ? styles.active : ""
                }`}
                onClick={() => handleButtonClick(1)}
              >
                Villas
              </button>
            </li>
            <li>
              <button
                className={`${styles.filterBtn} ${
                  activeButton === 2 ? styles.active : ""
                }`}
                onClick={() => handleButtonClick(2)}
              >
                For Rent
              </button>
            </li>
          </ul>
        </div>

        <List />
        <div className={styles.footerWrap}>
          <button className={styles.btn}>All Properties</button>
          <div className={styles.iconWrap}>
            <p className={styles.text}>
              Don't Miss Out on Hot Deals! <br /> Follow Us on Social Media
            </p>
            <ul className={styles.iconList}>
              <li className={styles.iconItem}>
                <a
                  className={styles.link}
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className={styles.icon}>
                    <use href={`${sprite}#icon-youtube`}></use>
                  </svg>
                </a>
              </li>
              <li className={styles.iconItem}>
                <a
                  className={styles.link}
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className={styles.icon}>
                    <use href={`${sprite}#icon-instagram`}></use>
                  </svg>
                </a>
              </li>
              <li className={styles.iconItem}>
                <a
                  className={styles.link}
                  href="https://www.tiktok.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className={styles.icon}>
                    <use href={`${sprite}#icon-tiktok`}></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
