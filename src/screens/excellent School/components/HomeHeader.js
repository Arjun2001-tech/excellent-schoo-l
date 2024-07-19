import React, { useState } from "react";
import '../styles/header.css';
import AboutUs from "./AboutUs";
import Admissions from "./Admissions";
import Contact from "./Contact";
import Academics from "./Academics";
import Hostels from "./Hostels";
import HomeSlider from "./HomeSlider";

const HomeHeader = () => {
  const menuTabs = ["",'aboutUs', 'admissions', 'academics', 'hostels', 'contact'];
  const [activeTab, setActiveTab] = useState(menuTabs[0]);

  let Component = null;

  const compobj = {
    aboutUs: AboutUs,
    admissions: Admissions,
    academics: Academics,
    hostels: Hostels,
    contact: Contact
  };
  Component = compobj[activeTab];
  //console.log(menuTabs, "menuTabs");

  return (
    <>
      <div className="header">
        <h1>SRM Valliammai Engineering College</h1>
        <h4>Chengalpattu District, Tamil Nadu, India.</h4>
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
      {activeTab ===""  ? (
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