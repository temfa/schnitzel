import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <Link href="https://www.instagram.com/schnitzelparadies_goettingen?igsh=bWxscmVsdW1hOGpp" target="_blank">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="24" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.2578 23.9065C11.2578 18.5849 11.2578 15.9241 12.5259 14.0076C13.0922 13.1518 13.8251 12.4188 14.6809 11.8526C16.5974 10.5845 19.2582 10.5845 24.5798 10.5845C29.9015 10.5845 32.5623 10.5845 34.4788 11.8526C35.3346 12.4188 36.0675 13.1518 36.6338 14.0076C37.9019 15.9241 37.9019 18.5849 37.9019 23.9065C37.9019 29.2281 37.9019 31.8889 36.6338 33.8054C36.0675 34.6613 35.3346 35.3942 34.4788 35.9604C32.5623 37.2285 29.9015 37.2285 24.5798 37.2285C19.2582 37.2285 16.5974 37.2285 14.6809 35.9604C13.8251 35.3942 13.0922 34.6613 12.5259 33.8054C11.2578 31.8889 11.2578 29.2281 11.2578 23.9065ZM31.4766 23.9072C31.4766 27.7163 28.3887 30.8042 24.5796 30.8042C20.7705 30.8042 17.6827 27.7163 17.6827 23.9072C17.6827 20.0981 20.7705 17.0102 24.5796 17.0102C28.3887 17.0102 31.4766 20.0981 31.4766 23.9072ZM24.5796 28.4707C27.1 28.4707 29.1432 26.4276 29.1432 23.9072C29.1432 21.3868 27.1 19.3436 24.5796 19.3436C22.0593 19.3436 20.0161 21.3868 20.0161 23.9072C20.0161 26.4276 22.0593 28.4707 24.5796 28.4707ZM31.7487 18.2841C32.6438 18.2841 33.3693 17.5585 33.3693 16.6635C33.3693 15.7685 32.6438 15.0429 31.7487 15.0429C30.8537 15.0429 30.1281 15.7685 30.1281 16.6635C30.1281 17.5585 30.8537 18.2841 31.7487 18.2841Z"
            fill="#D68240"
          />
        </svg>
      </Link>
      <div className={styles.left}>
        <p>©2024 Das Schnitzelparadies, Alle Rechte vorbehalten</p>
      </div>
      <div className={styles.right}>
        <Link href="/terms">Nutzungsbedingungen</Link>
        <Link href="/privacy">Datenschutzrichtlinie</Link>
      </div>
    </div>
  );
};

export default Footer;
