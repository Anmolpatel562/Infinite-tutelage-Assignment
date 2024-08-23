import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import Navbar from "../components/Navbar.jsx";
import navbarIcon from "../assets/navbarIcon.png";
import Dashboard from "../components/Dashboard.jsx";


const HomePage = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [mobileView,setMobileView] = useState(false);

  useEffect(() => {
    if(window.screen.width < 1000){
      setShowNavbar(false)
      setMobileView(true);
    }
    const handleResize = () => {
      if (window.screen.width < 1000) {
        setShowNavbar(false);
        setMobileView(true);
        return;
      }
      setShowNavbar(true);
      setMobileView(false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  },[]);

  const handleNavbar = () => {
    setShowNavbar(true);
    setTimeout(() => {
      setShowNavbar(false);
    }, 2000);
  };

  return (
    <div className={styles.homePageContainer}>
        {showNavbar ? (
          <Navbar></Navbar>
        ) : (
          <img
            style={{ width: "25px", height: "30px", padding: ".5rem" ,position:"absolute",top:"18px",}}
            src={navbarIcon}
            onClick={handleNavbar}
          ></img>
        )}
        <Dashboard  mobileView={mobileView}></Dashboard>
    </div>
  );
};

export default HomePage;
