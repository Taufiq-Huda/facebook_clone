"use client";
import React, { useState } from "react";
import styles from "../CSS/right_nav.module.css";
import Recent_search from "./Recent_search";

export default function Left_nav() {
  const [searchfocused, setsearchfocused] = useState(false);
  const [showrecent, setshowrecent] = useState(false);
  const focusinput = (e) => {
    setshowrecent(true);
  };

  const blurinput = (e) => {
    setshowrecent(false);
  };

  return (
    <div className={styles.right}>
      <div className={styles.test}>
        <div className={[styles.menu, styles.nav].join("")}>
          <svg viewBox="0 0 24 24" className={styles.icon} fill="currentColor">
            <path d="M12 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 16a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 17a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path>
          </svg>
        </div>
        <div className={styles.hovertext}>Menu</div>
      </div>
      <div className={styles.test}>
        <div className={[styles.messenger, styles.nav].join("")}>
          <svg viewBox="0 0 24 24" className={styles.icon} fill="currentColor">
            <path d="M.5 12C.5 5.649 5.649.5 12 .5S23.5 5.649 23.5 12 18.351 23.5 12 23.5c-1.922 0-3.736-.472-5.33-1.308a.63.63 0 0 0-.447-.069l-3.4.882a1.5 1.5 0 0 1-1.828-1.829l.882-3.4a.63.63 0 0 0-.07-.445A11.454 11.454 0 0 1 .5 12zm17.56-1.43a.819.819 0 0 0-1.125-1.167L14 11.499l-3.077-2.171a1.5 1.5 0 0 0-2.052.308l-2.93 3.793a.819.819 0 0 0 1.123 1.167L10 12.5l3.076 2.172a1.5 1.5 0 0 0 2.052-.308l2.931-3.793z"></path>
          </svg>
        </div>
        <div className={styles.hovertext}>Messenger</div>
      </div>
      <div className={styles.test}>
        <div className={[styles.notifications, styles.nav].join("")}>
          <svg viewBox="0 0 24 24" className={styles.icon} fill="currentColor">
            <path d="M3 9.5a9 9 0 1 1 18 0v2.927c0 1.69.475 3.345 1.37 4.778a1.5 1.5 0 0 1-1.272 2.295h-4.625a4.5 4.5 0 0 1-8.946 0H2.902a1.5 1.5 0 0 1-1.272-2.295A9.01 9.01 0 0 0 3 12.43V9.5zm6.55 10a2.5 2.5 0 0 0 4.9 0h-4.9z"></path>
          </svg>
        </div>
        <div className={styles.hovertext}>Notifications</div>
      </div>
      <div className={styles.test}>
        <div className={[styles.account, styles.nav].join("")}>
          <svg viewBox="0 0 24 24" className={styles.icon} fill="currentColor">
            <path d="M.5 12C.5 5.649 5.649.5 12 .5S23.5 5.649 23.5 12 18.351 23.5 12 23.5c-1.922 0-3.736-.472-5.33-1.308a.63.63 0 0 0-.447-.069l-3.4.882a1.5 1.5 0 0 1-1.828-1.829l.882-3.4a.63.63 0 0 0-.07-.445A11.454 11.454 0 0 1 .5 12zm17.56-1.43a.819.819 0 0 0-1.125-1.167L14 11.499l-3.077-2.171a1.5 1.5 0 0 0-2.052.308l-2.93 3.793a.819.819 0 0 0 1.123 1.167L10 12.5l3.076 2.172a1.5 1.5 0 0 0 2.052-.308l2.931-3.793z"></path>
          </svg>
        </div>
        <div className={styles.hovertext}>Account</div>
      </div>

      <Recent_search show={showrecent} />
    </div>
  );
}
