import React from "react";
import CollapsibleExample from "./Navbar";
import logo from "./assets/plogo.png";
import pc from "./assets/newsImages/news1.jpeg";
import sarfira  from "./assets/newsImages/news4.jpeg";
import luck  from "./assets/newsImages/news5.jpeg";
import mp  from "./assets/newsImages/news8.jpeg";

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
            <div className="d-flex justify-content-evenly fs-5">
              <div>
                {" "}
                <img src={pc} className={styless.m_img} /> बैंक लूट आरोपी गिरफ्तार
              </div>
              <div className="ms-4">
                <img src={sarfira} className={styless.m_img} 
                 />
                उज्जैन बीती रात गोली चलने से हड़कंप
              </div>

              <div className="ms-4">
                <img src={luck} className={styless.m_img} />
                CM मोहन का बड़ा ऐलान
              </div>

              <div className="ms-4">
                <img src={mp} className={styless.m_img} />
                मध्यप्रदेश राज्यसभा : केपी यादव को झटका
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
