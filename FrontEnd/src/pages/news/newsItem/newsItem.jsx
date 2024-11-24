import React from "react";
import css from "./newsItem.module.css";
const NewsItem = ({ data }) => {
  return (
    <>
      {data.map((el) => {
        return (
          <div className={css.section}>
            <div style={{background:`linear-gradient(to top, black, transparent) , url(${el.image})`}} className={css.image}>

              <h4>{el.title}</h4>
            </div>
            <div className={css.text}>
              <p>{el.description}</p>
              <div className={css.date}>
                <p>{el.date}</p>
                <button>Читать далее...</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default NewsItem;
