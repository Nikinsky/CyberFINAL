import React from "react";
import s from "./communityItem.module.css";

const CommunityItem = ({ data }) => {
  return (
    <>
      {data.map((el, index) => (
        <div key={index} className={s.center}>
          <div className={s.box}>
            <h6 className={s.title}>{el.title}</h6> {/* Используйте данные из el */}
            <p className={s.date}>13 october</p>
            <a href="" className={s.link}>
              information
            </a>
            <div className={s.circle}>
              <img src="/images/logo.svg" alt="" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CommunityItem;
