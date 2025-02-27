"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";

const Menu = () => {
  const [active, setActive] = useState(0);
  const headers = ["Schnitzel", "Kleine Gäste", "Salate"];
  const menu = [
    [
      { title: 'Schnitzel "Wiener Art" mit Zitrone', price: "€15.50 / €16.50" },
      { title: 'Schnitzel "Jäger Art" mit Champignons', price: "€18.50 / €19.50" },
      { title: 'Schnitzel "Balkan Art" mit Paprika, Zwiebeln und Mais', price: "€18.50 / €19.50" },
      { title: 'Schnitzel "Tomate" mit frischen Tomaten, Zwiebeln, Sauce Hollandaise und gratiniertem Käse', price: "€18.50 / €19.50" },
      { title: 'Schnitzel "Hawaii" mit Ananas, Schinken, Sauce Hollandaise, gratiniertem Käse und Preiselbeeren', price: "€18.50 / €19.50" },
      { title: 'Schnitzel "Cordon Bleu" gefüllt mit Schinken und Käse', price: "€18.50 / €19.50" },
      { title: "Schnitzel in cremiger Pilzsauce mit frischen Champignons und Rahmsauce", price: "€18.50 / €19.50" },
      { title: "Schnitzel mit gewürfeltem Schinken, Zwiebeln und gratiniertem Käse", price: "€18.50 / €19.50" },
      { title: 'Schnitzel "Knofi" mit gebratenen Zwiebeln und frischem Knoblauch', price: "€18.50 / €19.50" },
      { title: "Schnitzel mit Tomate, Mozzarella und Pesto gratiniert", price: "€18.50 / €19.50" },
      { title: 'Schnitzel "Berliner Art" mit gekochtem Schinken, Sauce Hollandaise und gratiniertem Käse', price: "€18.50 / €19.50" },
      { title: 'Schnitzel "Holsteiner Art" mit Spiegelei und Speck', price: "€18.50 / €19.50" },
      { title: "Schnitzel mit karamellisierten Zwiebeln und frischen Champignons", price: "€18.50 / €19.50" },
      { title: 'Schnitzel "Elsässer Art" mit gebratenen Zwiebeln und gewürfeltem Schinken in Sauerrahm', price: "€18.50 / €19.50" },
      { title: '"Zwiebelschnitzel" mit gebratenen Zwiebeln', price: "€18.50 / €19.50" },
      { title: '"Spargelschnitzel" mit Spargel, Sauce Hollandaise und gratiniertem Käse', price: "€18.50 / €19.50" },
      { title: 'Schnitzel "Schweizer Art" mit würziger Käsesauce', price: "€18.50 / €19.50" },
      { title: '"Pfefferschnitzel" mit würziger Pfeffersauce', price: "€18.50 / €19.50" },
      { title: '"Teufelsschnitzel" mit frischen Chilischoten, Zwiebeln und Tabasco', price: "€18.50 / €19.50" },
      { title: 'Schnitzel "Camembert" mit Apfelscheiben, gratiniertem Camembert und Preiselbeeren', price: "€18.50 / €19.50" },
      { title: '"Brokkolischnitzel" mit Brokkoli, Sauce Hollandaise und gratiniertem Käse', price: "€18.50 / €19.50" },
      { title: 'Schnitzel "Griechische Art" mit Feta-Käse, Zwiebeln und gratinierter Sauce Hollandaise', price: "€18.50 / €19.50" },
      { title: 'Schnitzel "Holländische Art" überzogen mit würziger Sauce Hollandaise (auch mit normaler Hollandaise erhältlich)', price: "€18.50 / €19.50" },
    ],
    [
      { title: "Chicken Nuggets mit Pommes", price: "€9.50" },
      { title: '"Kinder-Schnitzel" mit Pommes', price: "€9.50" },
      { title: "Portion Pommes", price: "€3.80" },
      { title: "Gulaschsuppe", price: "€6.90" },
      { title: "Currywurst mit Pommes", price: "€8.50" },
      { title: '"Hawaii-Toast" mit Schinken, Ananas, gratiniertem Käse und Beilagensalat', price: "€9.50" },
      { title: "Omelett (wahlweise mit Champignons oder Schinken, gratiniertem Käse und Beilagensalat)", price: "€10.50" },
    ],
    [
      { title: "Gemischter Salat mit Schinken und Käse", price: "€10.50" },
      { title: "Griechischer Salat mit Feta-Käse, Oliven und Peperoni", price: "€10.50" },
      { title: "Bunter Salat mit Putenstreifen", price: "€12.50" },
    ],
  ];

  return (
    <div className={styles.container} id="menu">
      <div className={styles.head} data-aos="fade-in" data-aos-duration="1000" data-aos-easing="ease-in" data-aos-mirror="true" data-aos-once="false">
        <h2>Unser bestes & köstliches Menü</h2>
        <div className={styles.nav}>
          {headers?.map((item, index) => {
            return (
              <p key={index} className={active === index ? styles.active : ""} onClick={() => setActive(index)}>
                {item}
              </p>
            );
          })}
        </div>
      </div>
      <div className={styles.body}>
        <p>Alle Schnitzel auch in Xl 500 Gramm und größer erhältlich erhältlich!</p>
        <div className={styles.cont}>
          {menu[active]?.map((item, index) => {
            return (
              <div className={styles.single} key={index} data-aos="fade-in" data-aos-duration="1000" data-aos-easing="ease-in" data-aos-mirror="true" data-aos-once="false">
                <div>
                  <h2>{item.title}</h2>
                  <p>Es ist das perfekte kulinarische Erlebnis, bei dem Sie schnell und effizient bedient werden.</p>
                </div>
                <h3>{item.price}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
