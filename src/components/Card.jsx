import React from "react";
import sprite from "../images/sprites.svg";
import img from "../images/mobile/Rectangle 48648.png";
import styles from "./cart.module.css";
const Card = ({ item }) => {
  return (
    <div>
      <div className={styles.imgWrap}>
        <img className={styles.img} src={img} alt="fgfd" />
      </div>
      <div className={styles.contentWrap}>
        <h2>Azure Heights Luxury Residences</h2>
        <button style={{ background: "#fff" }}>
          <svg
            width={30}
            height={30}
            style={{ fill: "transparent", stroke: "#232323" }}
          >
            <use href={`${sprite}#icon-arrow`}></use>
          </svg>
        </button>
        <button>
          <svg
            width={30}
            height={30}
            style={{ fill: "transparent", stroke: "#232323" }}
          >
            <use href={`${sprite}#icon-mark`}></use>
          </svg>
          Dubai Marina
        </button>
        <ul>
          <li>
            <p>Price </p>
            <span> from $290k</span>
          </li>
          <li>
            <p>Installment Plan </p>
            <span>from $290k</span>
          </li>
          <li>
            <p>Initial Payment </p>
            <span> $30,000</span>
          </li>
          <li>
            <p>Upgraded Features</p>
            <span>
              <svg width={30} height={30}>
                <use href={`${sprite}#icon-roller`}></use>
              </svg>
              <svg width={30} height={30}>
                <use href={`${sprite}#icon-chair`}></use>
              </svg>
            </span>
          </li>
          <li>
            <p>Completion Date </p>
            <span> 09/2025</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
