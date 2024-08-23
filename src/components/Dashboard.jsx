import React from "react";
import desktopStyle from "../components_css/Dashboard.module.css";
import mobileStyle from "../components_css/DashboardMobile.module.css";
import notification from "../assets/notification.png";
import search from "../assets/searchIcon.png";
import depositIcon from "../assets/depositIcon.png";
import withdrawIcon from "../assets/withdrawIcon.png";
import settingIcon from "../assets/searchIcon.png";
import verificationIcon from "../assets/verificationIcon.png";
import bonusIcon from "../assets/BonusIcon.png";
import mt5Icon from "../assets/mt5Icon.png";
import transferIcon from "../assets/TransferIcon.png";
import historyIcon from "../assets/historyWatchIcon.png";
import partnerIcon from "../assets/partnerIcon.png";
import exchangeIcon from "../assets/exchangesIcon.png";
import analyticsIcon from "../assets/analyticsIcon.png";
import BarChart from "../components/BarChart.jsx";
import download from "../assets/downloadIcon.png";

const Dashboard = ({mobileView}) => {
  let styles = "";
  if(mobileView){
    styles = mobileStyle;
  }else{
    styles = desktopStyle;
  }
  const monthlyRevenue = [
    750, 350, 1000, 1250, 500, 600, 250, 1400, 300, 400, 100, 250,
  ];
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
                  width: "80%",
                  height: "28px",
                  borderRadius: "8px",
                  border: "2px solid #EAECF0",
                  paddingLeft: "2.2rem",
                  color: "#98A2B3",
                  outline: "none",
                  fontFamily: "inter",
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
      <div className={styles.mainSectionContainer}>
        <div className={styles.rightContainer}>
          <div className={styles.quicklinkContainer}>
            <div>Quick Links</div>
            <div className={styles.quizLink}>
              <div className={styles.quickLinkBox}>
                <img src={depositIcon} alt="" />
                <div>Deposit</div>
              </div>
              <div className={styles.quickLinkBox}>
                <img src={withdrawIcon} alt="" />
                <div>Withdraw</div>
              </div>
              <div className={styles.quickLinkBox}>
                <img src={settingIcon} alt="" />
                <div>Settings</div>
              </div>
              <div className={styles.quickLinkBox}>
                <img src={verificationIcon} alt="" />
                <div>Verification</div>
              </div>
              <div className={styles.quickLinkBox}>
                <img src={bonusIcon} alt="" />
                <div>Bonuses</div>
              </div>
              <div className={styles.quickLinkBox}>
                <img src={mt5Icon} alt="" />
                <div>MT5</div>
              </div>
              <div className={styles.quickLinkBox}>
                <img src={transferIcon} alt="" />
                <div>Transfer</div>
              </div>
              <div className={styles.quickLinkBox}>
                <img src={historyIcon} alt="" />
                <div>History</div>
              </div>
              <div className={styles.quickLinkBox}>
                <img src={partnerIcon} alt="" />
                <div>Partner</div>
              </div>
              <div className={styles.quickLinkBox}>
                <img src={exchangeIcon} alt="" />
                <div>Exchange</div>
              </div>
              <div className={styles.quickLinkBox}>
                <img src={analyticsIcon} alt="" />
                <div>Analytic</div>
              </div>
            </div>
          </div>
          <div className={styles.overviewContainer}>
            <div className={styles.overviewheader}>
              <div>Overview</div>
              <div className={styles.monthlyYearlyContainer} style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:".5rem"}}>
                <img className={styles.downloadIcon} src={download} alt="" />
                <div style={{color:"#AD8EDD"}}>Download Report</div>
              </div>
            </div>
            <div
              
              style={{
                display: "flex",
                alignItems: "center",
                gap:"1rem",
                cursor:"pointer",
                fontSize:"14px"
              }}
            >
              <div style={{color:"#98A2B3"}}>Monthly</div>
              <div
                style={{
                  backgroundColor: "#F1EBF9",
                  padding: ".4rem",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                  borderRadius: "10px",
                }}
              >
                Yearly
              </div>
            </div>
            <BarChart data={monthlyRevenue} mobileView={mobileView}/>
          </div>
        </div>
        <div className={styles.leftContainer}>
          <div className={styles.tradingAccountContainer}>
            <div className={styles.textTradingAcc}>Trading Account</div>
            <div className={styles.masterAccBoxesContainer}>
              <div
                className={styles.masterAccBoxes}
                style={{
                  width: "88%",
                  height: "45%",
                  backgroundColor: "#FCFCFD",
                  borderRadius: "10px",
                  border: "1px solid #EAECF0",
                }}
              >
                <div style={{ fontSize: "12px" }}>Master Account</div>
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                    fontSize: "12px",
                    cursor:"pointer"
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#F2F4F7",
                      padding: ".5rem",
                      borderRadius: "20px",
                    }}
                  >
                    CTrader
                  </div>
                  <div>#273728</div>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <span style={{ fontSize: "28px", fontWeight: "700" }}>
                      0.00
                    </span>{" "}
                    &nbsp;USD
                  </div>
                  <img
                    src={withdrawIcon}
                    alt=""
                    style={{ width: "28px", height: "28px" ,cursor:"pointer"}}
                  />
                </div>
              </div>
              <div
                className={styles.masterAccBoxes}
                style={{
                  width: "88%",
                  height: "45%",
                  backgroundColor: "#FCFCFD",
                  borderRadius: "10px",
                  border: "1px solid #EAECF0",
                }}
              >
                <div style={{ fontSize: "12px" }}>Master Account</div>
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                    fontSize: "12px",
                    cursor:"pointer"
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#F2F4F7",
                      padding: ".5rem",
                      borderRadius: "20px",
                    }}
                  >
                    CTrader
                  </div>
                  <div>#273728</div>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <span style={{ fontSize: "28px", fontWeight: "700" }}>
                      0.00
                    </span>{" "}
                    &nbsp;USD
                  </div>
                  <img
                    src={withdrawIcon}
                    alt=""
                    style={{ width: "28px", height: "28px",cursor:"pointer" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.openTradeContainer}>
            <div style={{ width: "100%", height: "10%" }}>Open trades</div>
            <div
              style={{
                width: "100%",
                height: "90%",
                display: "flex",
                flexDirection: "column",
                gap: ".4rem",
              }}
            >
              <div
                className={styles.openTradeBoxes}
                style={{
                  width: "88%",
                  height: "20%",
                  backgroundColor: "#FCFCFD",
                  borderRadius: "10px",
                  border: "1px solid #EAECF0",
                  padding: "1rem",
                }}
              >
                <div className={styles.topContext}>
                  <div
                    style={{
                      display: "flex",
                      gap: ".5rem",
                      alignItems: "center",
                    }}
                  >
                    <div>GBPUSD</div>
                    <div
                      style={{
                        backgroundColor: "#EBFFEE",
                        padding: ".2rem",
                        paddingLeft: ".4rem",
                        paddingRight: ".4rem",
                        borderRadius: "20px",
                      }}
                    >
                      Long
                    </div>
                  </div>
                  <div>0.12</div>
                </div>
                <div>
                  <span style={{ color: "#14AE5C", fontSize: "18px" }}>
                    +56.00
                  </span>
                  &nbsp;USD
                </div>
              </div>
              <div
                className={styles.openTradeBoxes}
                style={{
                  width: "88%",
                  height: "20%",
                  backgroundColor: "#FCFCFD",
                  borderRadius: "10px",
                  border: "1px solid #EAECF0",
                  padding: "1rem",
                }}
              >
                <div className={styles.topContext}>
                  <div
                    style={{
                      display: "flex",
                      gap: ".5rem",
                      alignItems: "center",
                    }}
                  >
                    <div>USDJPY</div>
                    <div
                      style={{
                        backgroundColor: "#EBFFEE",
                        padding: ".2rem",
                        paddingLeft: ".4rem",
                        paddingRight: ".4rem",
                        borderRadius: "20px",
                      }}
                    >
                      Long
                    </div>
                  </div>

                  <div>0.52</div>
                </div>
                <div>
                  <span style={{ color: "#EC221F", fontSize: "18px" }}>
                    -0.09
                  </span>
                  &nbsp;USD
                </div>
              </div>

              <div
                className={styles.openTradeBoxes}
                style={{
                  width: "88%",
                  height: "20%",
                  backgroundColor: "#FCFCFD",
                  borderRadius: "10px",
                  border: "1px solid #EAECF0",
                  padding: "1rem",
                }}
              >
                <div className={styles.topContext}>
                  <div
                    style={{
                      display: "flex",
                      gap: ".5rem",
                      alignItems: "center",
                    }}
                  >
                    <div>EURUSD</div>
                    <div
                      style={{
                        backgroundColor: "#FEE9E7",
                        padding: ".2rem",
                        paddingLeft: ".4rem",
                        paddingRight: ".4rem",
                        borderRadius: "20px",
                      }}
                    >
                      Short
                    </div>
                  </div>
                  <div>0.34</div>
                </div>
                <div>
                  <span style={{ color: "#EC221F", fontSize: "18px" }}>
                    -1.09
                  </span>
                  &nbsp;USD
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
