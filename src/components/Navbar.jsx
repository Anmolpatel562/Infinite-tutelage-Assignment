import React from "react";
import styles from "../components_css/Navbar.module.css";
import appLogo from "../assets/appLogo.png";
import bellicon from "../assets/bellIcon.png";
import crmIcon from "../assets/crmIcon.png";
import dashboardIcon from "../assets/dashboardIcon.png";
import mamIcon from "../assets/mamIcon.png";
import pammIcon from "../assets/pamm.png";
import dollarIcon from "../assets/dollarIcon.png";
import historyIcon from "../assets/historyIcon.png";
import tradeIcon from "../assets/trade.png";
import walletIcon from "../assets/walletIcon.png";
import settingIcon from "../assets/settingIcon.png";
import headfoneIcon from "../assets/headfoneIcon.png";
import logoutIcon from "../assets/logoutIcon.png";
import profileIcon from "../assets/profileIcon.png";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"89%"}}>
        <div className={styles.headerNavbarContainer}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "2.5rem",
            }}
          >
            <img src={appLogo} alt="" />
          </div>
          <div className={styles.navbarHeaderUpperContainer}>
            <div style={{display:"flex",gap:"1.5rem",padding:".2rem",cursor:"pointer"}} className={styles.dashboardOption}>
              <img
                className={styles.logos}
                style={{ width: "19px", height: "20px" }}
                src={dashboardIcon}
                alt=""
              />
              <div>Dashboard</div>
            </div>
            <div className={styles.options}>
              <img
                className={styles.logos}
                style={{ width: "19px", height: "20px" }}
                src={crmIcon}
                alt=""
              />
              <div>CRM</div>
            </div>
            <div className={styles.options}>
              <img
                className={styles.logos}
                style={{ width: "18px", height: "15px" }}
                src={mamIcon}
                alt=""
              />
              <div>MAM</div>
            </div>
            <div className={styles.options}>
              <img
                className={styles.logos}
                style={{ width: "16px", height: "16px" }}
                src={pammIcon}
                alt=""
              />
              <div>PAMM</div>
            </div>
            <div className={styles.options}>
              <img
                className={styles.logos}
                style={{ width: "16px", height: "16px" }}
                src={tradeIcon}
                alt=""
              />
              <div>Trade</div>
            </div>
            <div className={styles.options}>
              <img
                className={styles.logos}
                style={{ width: "18px", height: "18px" }}
                src={walletIcon}
                alt=""
              />
              <div>Wallet</div>
            </div>
            <div className={styles.options}>
              <img
                className={styles.logos}
                style={{ width: "18px", height: "18px" }}
                src={dollarIcon}
                alt=""
              />
              <div>Accounts</div>
            </div>
            <div className={styles.options}>
              <img
                className={styles.logos}
                style={{ width: "18px", height: "18px" }}
                src={historyIcon}
                alt=""
              />
              <div>History</div>
            </div>
          </div>
        </div>
        <div className={styles.footerNavbarContainer}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <div className={styles.options}>
              <img
                className={styles.logos}
                style={{ width: "17px", height: "15px" }}
                src={bellicon}
                alt=""
              />
              <div>Notification</div>
            </div>
            <div className={styles.options}>
              <img
                className={styles.logos}
                style={{ width: "18px", height: "18px" }}
                src={settingIcon}
                alt=""
              />
              <div>Setting</div>
            </div>
            <div className={styles.options}>
              <img
                className={styles.logos}
                style={{ width: "18px", height: "18px" }}
                src={headfoneIcon}
                alt=""
              />
              <div>Help & Support</div>
            </div>
            <div className={styles.options}>
              <img
                className={styles.logos}
                style={{ width: "18px", height: "18px" }}
                src={logoutIcon}
                alt=""
              />
              <div>Log Out</div>
            </div>
          </div>
        </div>
      </div>
      <div style={{height:"9%"}}>
        <div style={{width:"100%",height:"1px",backgroundColor:"#BBA1E3"}}></div>
        <div style={{display:"flex",gap:".5rem",justifyContent:"center",alignItems:"center",paddingTop:".8rem"}}>
          <img className={styles.logos} src={profileIcon} alt="" />
          <div>
            <div>Shyam Shakur</div>
            <div style={{fontSize:"14px"}}>shyam01.shakur@gm...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
