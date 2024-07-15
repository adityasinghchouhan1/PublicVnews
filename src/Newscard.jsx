import React from "react";
import styles from "./Newscards.module.css";

const Newscard = () => {
  const carddata = [
    { img: "Launching Soon", content: "Launching Soon" },
    { img: "Launching Soon", content: "Launching Soon" },
    { img: "Launching Soon", content: "Launching Soon" },
    { img: "Launching Soon", content: "Launching Soon" },
  ];

  return (
    <>
      <div className="d-flex justify-content-around mt-4 flex-wrap">
        {carddata.map((items) => (
          <div className={styles.cards}>
            <div className="d-flex justify-content-center align-items-center border-1 border h-50 fw-bold fs-5">
              {items.img}
            </div>
            <div className="d-flex justify-content-center align-items-center  fw-bold pt-5 fs-5">
              {items.content}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Newscard;
