import React, { useState } from "react";
import { Image } from "semantic-ui-react";
import HomeSlider from "./HomeSlider";
import AboutUs from "./AboutUs";
import Admissions from "./Admissions";
import Academics from "./Academics";
import Hostels from "./Hostels";
import Contact from "./Contact";
import '../styles/header.css';

const HomeHeader = () => {
  const menuTabs = ["", 'About Us', 'Admissions', 'Academics', 'Hostels', 'Contact Us'];
  const [activeTab, setActiveTab] = useState(menuTabs[0]);

  let Component = null;

  const compobj = {
    "About Us": AboutUs,
    Admissions: Admissions,
    Academics: Academics,
    Hostels: Hostels,
    "Contact Us": Contact
  };
  Component = compobj[activeTab];

  return (
    <>
      <div className="header">
        <div>
          <Image
            src="https://freesvg.org/img/logo_school.png"
            onClick={() => setActiveTab("")}
          />
          <div>
            <h1>EXCELLENT HR. SEC. SCHOOL</h1>
            <h4>Tamil Nadu, India.</h4>
          </div>
        </div>
        <div className="nav_header"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div>
            {(menuTabs.map((tab, i) => (
              <div
                fontas="alpha"
                className={menuTabs[i] === activeTab ? "activeTab" : ''}
                onClick={() => setActiveTab(tab)}
                role="button"
                tabIndex={i + 1}
                onKeyDown={null}
                key={tab}
              >
                {(tab)}
                {tab === activeTab && <div />}
              </div>
            )))}
          </div>
        </div>
      </div>
      {activeTab === "" ? (
        <HomeSlider />
      ) : (
        <>
          {
            Component && (
              <Component
                setActiveTab={setActiveTab}
              />
            )
          }
        </>
      )}
    </>
  );
}
export default HomeHeader;