import React from "react";
import styles from "./Footer.module.css";
import { footerdata } from "./Data/Footerdata";
const Footer = () => {
  return (
    <footer className={styles["site-footer"]}>
      <div className="container">
        <div className="d-flex justify-content-center  flex-wrap">
          {footerdata.map((items, index) => (
            <div>
              <div className="mx-2">{items.fitem}</div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center">
          @ 2024 पब्लिक वाणी. All Right Reserved. Powered by SSS Technologies
        </div>
      </div>
    </footer>
  );
};

export default Footer;
