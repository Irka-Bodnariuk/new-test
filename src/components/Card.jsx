import React from "react";
import sprite from "../images/sprites.svg";
import s from "./cart.module.css";
import imageData from "../datа.json"; // Шлях до вашого файлу з даними

// src = "/static/media/Rectangle 48555.c22664792d143321b182.png";

const Card = ({ item }) => {
  return (
    <div>
      {imageData.map((imageItem) => (
        <div className={s.cardThumb} key={imageItem.id}>
          <div className={s.imgWrap}>
            <img src={imageItem.image} alt={imageItem.title} />
          </div>
          <div className={s.contentWrap}>
            <h2 className={s.Card__imageItemTitle}>{imageItem.title}</h2>
            <button className={s.Card__BtnToMap}>
              <svg
                width={30}
                height={30}
                style={{ fill: "transparent", stroke: "#232323" }}
              >
                <use href={`${sprite}#icon-arrow`}></use>
              </svg>
            </button>
            <button className={s.Card__locationBtn}>
              <svg
                width={30}
                height={30}
                style={{ fill: "transparent", stroke: "#232323" }}
              >
                <use href={`${sprite}#icon-mark`}></use>
              </svg>
              {imageItem.location}
            </button>
            <ul className={s.Card__itemList}>
              <li className={s.Card__itemTag}>
                <p className={s.Card__itemTagTitle}>Price </p>
                <span className={s.Card__itemTagValue}>{imageItem.price}</span>
              </li>
              <li className={s.Card__itemTag}>
                <p className={s.Card__itemTagTitle}>Installment Plan </p>
                <span className={s.Card__itemTagValue}>
                  {imageItem.installmentPlan}
                </span>
              </li>
              <li className={s.Card__itemTag}>
                <p className={s.Card__itemTagTitle}>Initial Payment </p>
                <span className={s.Card__itemTagValue}>
                  {imageItem.initialPayment}
                </span>
              </li>
              <li className={s.Card__itemTag}>
                <p className={s.Card__itemTagTitle}>Upgraded Features</p>
                <span className={s.Card__itemTagValue}>
                  {imageItem.upgradedFeatures.map((feature, index) => (
                    <svg key={index} width={30} height={30}>
                      <use href={`${sprite}#icon-${feature}`}></use>
                    </svg>
                  ))}
                </span>
              </li>
              <li>
                <p className={s.Card__itemTagTitle}>Completion Date </p>
                <span className={s.Card__itemTagValue}>
                  {imageItem.completionDate}
                </span>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
