import { Divider, Grid } from "@mui/material";
import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context";
import useOnScreen from "../hook/useOnScreen";
import s from "./index.module.css";

const Product = ({ card, idx }) => {
  const { name, price, characters, photo, link, id } = card;
  const { addToCart } = useContext(Context);
  const onClick = () => addToCart(card);
  // const ref = useRef(null);
  // const isInViewport1 = useOnScreen(ref);
  // const classProductCard = isInViewport1
  //   ? s.wrapperCard + " " + s.animationCard
  //   : s.wrapperCard;
  //   console.log(isInViewport1);
  return (
    <Grid item xs={4} sx={{}}>
      <div
        // style={{ animationDelay: `${idx * 0.2}s` }}
        className={s.wrapperCard}
      >
        <Link to={`/product/${link}`}>
          <ul className={s.listProduct}>
            {photo && (
              <li key={id} className={s.item}>
                <img
                  src={`${process.env.PUBLIC_URL}/${photo}`}
                  alt={photo}
                  width="200"
                />
                <Divider />
              </li>
            )}
            <li key={name} className={s.item}>
              <h3 className={s.titleName}>{name}</h3>
              <Divider />
            </li>
            <li key={price} className={s.item}>
              <h3 className={s.titlePrice}>${price}.00</h3>
              <Divider />
            </li>

            {characters &&
              characters.map(({ title, icon }) => (
                <li key={title + id} className={s.item}>
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
          ADD TO CART
        </button>
      </div>
    </Grid>
  );
};

export default Product;
