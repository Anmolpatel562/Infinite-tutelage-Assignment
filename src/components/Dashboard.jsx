import React from "react";
import styles from "../components_css/Dashboard.module.css";
import notification from "../assets/notification.png";
import search from "../assets/searchIcon.png";

const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.header}>
          <div>Dashboard</div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1.5rem",
            }}
          >
            <div style={{ position: "relative" }}>
              <img
                style={{ position: "absolute", top: "7px", left: "10px" }}
                src={search}
                alt=""
              />
              <input
                style={{
                  width: "200px",
                  height: "28px",
                  borderRadius: "8px",
                  border: "2px solid #EAECF0",
                  paddingLeft: "2.2rem",
                  color: "#98A2B3",
                  outline: "none",
                  fontFamily:"inter"
                }}
                placeholder="Search..."
              />
            </div>
            <div>
              <img src={notification} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>Quick link</div>
        <div>Overview</div>
      </div>
      <div>
        <div>Trading Account</div>
        <div>Open trades</div>
      </div>
    </div>
  );
};

export default Dashboard;
