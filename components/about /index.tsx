import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.container} id="about">
      <div className={styles.left} data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in" data-aos-mirror="true" data-aos-once="false">
        <div className={styles.leftTop}>
          <p>Über Uns</p>
          <div></div>
        </div>
        <div className={styles.leftBottom}>
          <h2>Willkommen im Schnitzelparadies!</h2>
          <p>
            Genieße bei uns knusprig-goldene Schnitzel, frisch zubereitet und mit Liebe serviert. Ob klassisch, kreativ oder vegetarisch – hier ist für jeden Geschmack etwas dabei!
          </p>
          <p>Komm vorbei und probiere es selbst!</p>
          {/* <h3>
            Follow us on instagram:{" "}
            <Link href="https://www.instagram.com/schnitzelparadies_goettingen?igsh=bWxscmVsdW1hOGpp" target="_blank">
              @schnitzelparadies_goettingen
            </Link>
          </h3> */}
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
