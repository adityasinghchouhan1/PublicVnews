import React from "react";
import CollapsibleExample from "./Navbar";
import logo from "./assets/plogo.png";
import { marqureedata } from "./Data/Marqueedata";

import Newscard from "./Newscard";
import styless from "./Header.module.css";
const Header = () => {
  return (
    <>
      <header>
        <div className={styless.logo_container}>
          <div className={styless.bg_logo}>
            <img src={logo} className={styless.Plogo} />
          </div>
        </div>

        {/* --------- Navbar ---------- */}
        <CollapsibleExample />

        <div className="border-1 border-bottom mt-3 position-relative">
          <div className={styless.taza}> ताज़ा खबर</div>
          <marquee>
            <div className="d-flex justify-content-evenly fs-6 position-relative">
              {marqureedata.map((items, index) => (
                <div className="ms-2" key={index}>
                  <div className={styless.img_container}>
                    <img src={items.imgs} className={styless.m_img} />
                    <div className="mt-2 mx-2">{items.conetnt}</div>
                  </div>
                </div>
              ))}
            </div>
          </marquee>
        </div>

        <Newscard />
      </header>
    </>
  );
};

export default Header;
