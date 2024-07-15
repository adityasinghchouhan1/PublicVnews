import React from "react";
import CollapsibleExample from "./Navbar";
import logo from "./assets/plogo.png";
import pc from "./assets/pc.jpg";
import sarfira from "./assets/sarfira.jpg";
import luck from "./assets/Lucknow.jpg";
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
        <CollapsibleExample />

        <div className="border-1 border-bottom mt-3">
          <div className={styless.taza}> ताज़ा खबर</div>
          <marquee>
            <div className="d-flex justify-content-evenly fs-5">
              <div>
                {" "}
                <img src={pc} className={styless.m_img} /> Launching Soon
                Launching Soon Launching Soon{"  "}
              </div>
              <div className="ms-4">
                <img src={sarfira} className={styless.m_img} />
                Launching Soon Launching Soon Launching Soon
              </div>

              <div className="ms-4">
                <img src={luck} className={styless.m_img} />
                Launching Soon Launching Soon Launching Soon
              </div>
            </div>
          </marquee>
        </div>

        <Newscard />
      </header>
    </>
  );
};

export default Header;
