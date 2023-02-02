import { Divider, Grid } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context";
import s from "./index.module.css";

const Product = ({ card, idx, mdColumn, xsColumn }) => {
  const { name, price, characters, photo, link, id } = card;
  const { addToCart } = useContext(Context);
  const onClick = () => addToCart(card);
  return (
    <Grid item xs={16} md={4}>
      <div
        // style={{ animationDelay: `${idx * 0.2}s` }}
        className={s.wrapperCard}
      >
        <Link to={`/product/${link}`}>
          <ul className={s.listProduct}>
            {photo && (
              <li key={id + photo} className={s.item}>
                <img
                  src={`${process.env.PUBLIC_URL}/${photo}`}
                  alt={photo}
                  width="200"
                  className={s.imageCard}
                />
                <Divider />
              </li>
            )}
            <li key={id + name} className={s.item}>
              <h3 className={s.titleName}>{name}</h3>
              <Divider />
            </li>
            <li key={price} className={s.item}>
              <h3 className={s.titlePrice}>₴ {price}</h3>
              <Divider />
            </li>

            {characters &&
              characters.map(({ title, icon }, idx) => (
                <li
                  key={`${id} + ${title} + ${idx}`}
                  className={s.item}
                >
                  <div className={s.wrapperItem}>
                    {icon}
                    <h4 className={s.charactersTitle}>{title}</h4>
                  </div>
                  <Divider />
                </li>
              ))}
          </ul>
        </Link>
        <button onClick={onClick} className={s.buttonCard}>
          Купити
        </button>
      </div>
    </Grid>
  );
};

export default Product;
