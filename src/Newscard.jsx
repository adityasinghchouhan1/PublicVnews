import React from "react";
import styles from "./Newscards.module.css";
import { carddata } from "./Data/Newscardata";
import { useCollapse } from "react-collapsed";
import arrow from "./assets/newsImages/titlearrow.gif";

const Newscard = () => {
  return (
    <div className="d-flex justify-content-center mt-4 flex-wrap flex-column gap-1">
      {carddata.map((items, index) => {
        const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
        return (
          <div className={styles.cards} key={index}>
            <div className={styles.news_img}>
              <img src={items.img} alt="news" className={styles.img} />
            </div>

            <div className={styles.news_content}>
              <div className={styles.heading_container}>
                <img src={arrow} className={styles.Harrow} />
                <h3 className={styles.news_heading}>{items.heading}</h3>
              </div>
              {items.news_content}
              {!isExpanded && (
                <div className={styles.read_more_btn} {...getToggleProps()}>
                  Read More
                </div>
              )}
              <section {...getCollapseProps()}>
                {items.readmore}

                {isExpanded && (
                  <div className="d-flex justify-content-center align-items-center">
                    <div className={styles.read_show_btn} {...getToggleProps()}>
                      Show less...
                    </div>
                  </div>
                )}
              </section>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Newscard;
