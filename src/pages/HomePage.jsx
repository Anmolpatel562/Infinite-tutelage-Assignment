import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import Navbar from "../components/Navbar.jsx";
import navbarIcon from "../assets/navbarIcon.png";
import Dashboard from "../components/Dashboard.jsx";

const HomePage = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.screen.width < 1200) {
        setShowNavbar(false);
        return;
      }
      setShowNavbar(true);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [showNavbar]);

  const handleNavbar = () => {
    setShowNavbar(true);
    setTimeout(() => {
      setShowNavbar(false);
    }, 3000);
  };

  return (
    <div className={styles.homePageContainer}>
        {showNavbar ? (
          <Navbar></Navbar>
        ) : (
          <img
            style={{ width: "25px", height: "30px", padding: ".5rem" ,position:"absolute",top:"10px",}}
            src={navbarIcon}
            onClick={handleNavbar}
          ></img>
        )}
        <Dashboard></Dashboard>
    </div>
  );
};

export default HomePage;
