import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className={styles.container} id="about">
      <div className={styles.left} data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in" data-aos-mirror="true" data-aos-once="false">
        <div className={styles.leftTop}>
          <p>Über Uns</p>
          <div></div>
        </div>
        <div className={styles.leftBottom}>
          <h2>Wir laden Sie ein, unser Café zu besuchen</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc varius. Facilisis eget cras sit semper sit enim. Turpis aliquet at ac eu donec ut. Sagittis vestibulum at
            quis non massa netus.
          </p>
          <h3>
            Follow us on instagram:{" "}
            <Link href="https://www.instagram.com/schnitzelparadies_goettingen?igsh=bWxscmVsdW1hOGpp" target="_blank">
              @schnitzelparadies_goettingen
            </Link>
          </h3>
        </div>
      </div>
      <Image
        src="/images/about.jpg"
        alt="About"
        width={720}
        height={550}
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-easing="ease-in"
        data-aos-mirror="true"
        data-aos-once="false"
      />
    </div>
  );
};

export default About;
