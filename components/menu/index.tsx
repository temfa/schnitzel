"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";

const Menu = () => {
  const [active, setActive] = useState(0);
  const headers = ["Schnitzel", "Little Guests", "Salads"];
  const menu = [
    [
      { title: 'Schnitzel "Wiener Style" with lemon', price: "€15.50 / €16.50" },
      { title: 'Schnitzel "Hunter Style" with mushrooms', price: "€18.50 / €19.50" },
      { title: 'Schnitzel "Balkan Style" with paprika, onions, and corn', price: "€18.50 / €19.50" },
      { title: 'Schnitzel "Tomato" with fresh tomatoes, onions, hollandaise, and cheese au gratin', price: "€18.50 / €19.50" },
      { title: 'Schnitzel "Hawaii" with pineapple, ham, hollandaise, cheese au gratin, and lingonberries', price: "€18.50 / €19.50" },
      { title: 'Schnitzel "Cordon Bleu" stuffed with ham and cheese', price: "€18.50 / €19.50" },
      { title: "Schnitzel in Creamy Mushroom Sauce with fresh mushrooms and cream sauce", price: "€18.50 / €19.50" },
      { title: "Schnitzel with diced ham, onions, and cheese au gratin", price: "€18.50 / €19.50" },
      { title: 'Schnitzel "Knofi" with sautéed onions and fresh garlic', price: "€18.50 / €19.50" },
      { title: "Schnitzel with tomato, mozzarella, and pesto au gratin", price: "€18.50 / €19.50" },
      { title: 'Schnitzel "Berlin Style" with cooked ham, hollandaise, and cheese au gratin', price: "€18.50 / €19.50" },
      { title: 'Schnitzel "Holstein Style" with fried eggs and bacon', price: "€18.50 / €19.50" },
      { title: "Schnitzel topped with caramelized onions and fresh mushrooms", price: "€18.50 / €19.50" },
      { title: 'Schnitzel "Alsace Style" with sautéed onions and diced ham in sour cream', price: "€18.50 / €19.50" },
      { title: '"Onion Schnitzel" with sautéed onions', price: "€18.50 / €19.50" },
      { title: '"Asparagus Schnitzel" with asparagus, hollandaise, and cheese au gratin', price: "€18.50 / €19.50" },
      { title: 'Schnitzel "Swiss Style" with spicy cheese sauce', price: "€18.50 / €19.50" },
      { title: '"Pepper Schnitzel" with spicy pepper sauce', price: "€18.50 / €19.50" },
      { title: '"Devil\'s Schnitzel" with fresh chili peppers, onions, and Tabasco', price: "€18.50 / €19.50" },
      { title: 'Schnitzel "Camembert" with apple slices, Camembert au gratin, and lingonberries', price: "€18.50 / €19.50" },
      { title: '"Broccoli Schnitzel" with broccoli, hollandaise, and cheese au gratin', price: "€18.50 / €19.50" },
      { title: 'Schnitzel "Greek Style" with feta cheese, onions, and hollandaise au gratin', price: "€18.50 / €19.50" },
      { title: 'Schnitzel "Dutch Style" covered in spicy hollandaise (also available with regular hollandaise)', price: "€18.50 / €19.50" },
    ],
    [
      { title: "Chicken Nuggets with Fries", price: "€9.50" },
      { title: '"Kids\' Schnitzel" with Fries', price: "€9.50" },
      { title: "Portion of Fries", price: "€3.80" },
      { title: "Goulash Soup", price: "€6.90" },
      { title: "Currywurst with Fries", price: "€8.50" },
      { title: '"Hawaii Toast" with ham, pineapple, cheese au gratin, and a side salad', price: "€9.50" },
      { title: "Omelette (choice of mushrooms or ham, with cheese au gratin and a side salad)", price: "€10.50" },
    ],
    [
      { title: "Mixed Salad with ham and cheese", price: "€10.50" },
      { title: "Greek Salad with feta cheese, olives, and chili peppers", price: "€10.50" },
      { title: "Colorful Salad with turkey strips", price: "€12.50" },
    ],
  ];
  return (
    <div className={styles.container} id="menu">
      <div className={styles.head}>
        <h2>Our Best & Delicious Menu</h2>
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
        {menu[active]?.map((item, index) => {
          return (
            <div className={styles.single} key={index}>
              <div>
                <h2>{item.title}</h2>
                <p>Its the perfect dining experience where Experience quick and efficient</p>
              </div>
              <h3>{item.price}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
