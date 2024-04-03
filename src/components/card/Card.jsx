import React, { useEffect, useRef } from "react";
import sprite from "../../images/sprites.svg";
import s from "./cart.module.css";

const Card = ({ imageItem }) => {
  const sliderRef = useRef(null);
  const itemListRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const itemList = itemListRef.current;

    if (!slider || !itemList) return;

    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;

    const handleMouseDown = (e) => {
      isDragging = true;
      startPos = e.clientX;
      slider.style.cursor = "grabbing";
    };

    const handleMouseMove = (e) => {
      if (isDragging) {
        const currentPosition = e.clientX;
        currentTranslate = prevTranslate + currentPosition - startPos;
        itemList.scrollLeft = -currentTranslate;
      }
    };

    const handleMouseUp = () => {
      isDragging = false;
      prevTranslate = currentTranslate;
      slider.style.cursor = "grab";
    };

    const handleMouseLeave = () => {
      isDragging = false;
      slider.style.cursor = "grab";
    };

    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mousemove", handleMouseMove);
    slider.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mousemove", handleMouseMove);
      slider.removeEventListener("mouseup", handleMouseUp);
      slider.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className={s.cardThumb} key={imageItem.id}>
      <div className={s.imgWrap}>
        <img
          className={s.card__image}
          src={imageItem.image}
          alt={imageItem.title}
        />
      </div>
      <div className={s.contentWrap}>
        <div style={{ position: "relative" }}>
          <div className={s.Card__topContentconatiner}>
            <h2 className={s.Card__imageItemTitle}>{imageItem.title}</h2>

            <button className={s.Card__BtnArrow}>
              <svg
                width={18}
                height={25}
                style={{
                  fill: "transparent",
                  stroke: "#232323",
                  top: "11",
                  left: "12",
                  position: "absolute",
                }}
              >
                <use href={`${sprite}#icon-arrow`}></use>
              </svg>
            </button>
            <div className={s.Card__bottomContentContainer}>
              <h2 className={s.Card__imageItemTitleBottom}>
                {imageItem.title}
              </h2>
            </div>
          </div>
        </div>
        <div className={s.Card__itemListThumb} ref={sliderRef}>
          <div className={s.Card__locationBtnThumb}>
            <button className={s.Card__locationBtn}>
              <svg
                width={22}
                height={24}
                style={{
                  fill: "transparent",
                  stroke: "#232323",
                }}
              >
                <use href={`${sprite}#icon-mark`}></use>
              </svg>
              <p className={s.Card__locationBtnText}>{imageItem.location}</p>
            </button>
          </div>
          <ul
            className={`${s.Card__itemList} ${s.horizontalSlider}`}
            ref={itemListRef}
          >
            <li className={s.Card__itemTag}>
              <div className={s.Card__itemTagContentThumb}>
                <p className={s.Card__itemTagTitle}>Price </p>
                <span className={s.Card__itemTagValue}>{imageItem.price}</span>
              </div>
            </li>
            <li className={s.Card__itemTag}>
              <div className={s.Card__itemTagContentThumb}>
                <p className={s.Card__itemTagTitle}>Installment Plan </p>
                <span className={s.Card__itemTagValue}>
                  {imageItem.installmentPlan}
                </span>
              </div>
            </li>
            <li className={s.Card__itemTag}>
              <div className={s.Card__itemTagContentThumb}>
                <p className={s.Card__itemTagTitle}>Initial Payment </p>
                <span className={s.Card__itemTagValue}>
                  {imageItem.initialPayment}
                </span>
              </div>
            </li>
            <li className={s.Card__itemTag}>
              <div className={s.Card__itemTagContentThumb}>
                <p className={s.Card__itemTagTitle}>Upgraded Features</p>
                <span className={s.Card__itemTagValue}>
                  {imageItem.upgradedFeatures.map((feature, index) => (
                    <svg
                      className={s.Card__svg}
                      key={index}
                      width={18}
                      height={18}
                    >
                      <use href={`${sprite}#icon-${feature}`}></use>
                    </svg>
                  ))}
                </span>
              </div>
            </li>
            <li className={s.Card__itemTag}>
              <div className={s.Card__itemTagContentThumb}>
                <p className={s.Card__itemTagTitle}>Completion Date </p>
                <span className={s.Card__itemTagValue}>
                  {imageItem.completionDate}
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
