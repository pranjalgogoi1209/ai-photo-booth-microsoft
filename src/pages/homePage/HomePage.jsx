import React from "react";
import styles from "./homePage.module.css";

import { Link } from "react-router-dom";

/* import headingTxt from "./../../assets/home/headingTxt.svg";
import startBtn from "./../../assets/home/startBtn.svg";
import logo from "./../../assets/logo.png"; */

import { cardsArr } from "../../utils/avatar/cards";

export default function HomePage() {
  return (
    <div className={`flex-col-center ${styles.HomePage}`}>
      {/* <div className={styles.containerOne}>
        <img src={logo} alt="garnier-logo" />
      </div> */}

      {/* <div className={styles.headingTxt}>
        <img src={headingTxt} alt="heading-txt" />
      </div> */}

      <div className={`flex-row-center ${styles.avatarContainer}`}>
        {cardsArr?.map((item, idx) => (
          <div key={idx} className={styles.singleImg}>
            <img src={item} alt="avatar" />
          </div>
        ))}
      </div>

      <Link to={"/camera"} className={styles.startBtn}>
        {/* <div className={`imgContainer ${styles.imgContainer}`}>
          <img src={startBtn} alt="start-button" />
        </div> */}

        <button className={`btn1`}>START</button>
      </Link>
    </div>
  );
}
