import { CloseRounded } from "@mui/icons-material";
import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Section from "../../components/section";
import s from "./index.module.css";

const CartPage = () => {
  useEffect(() => {
    const getTotalProductsCart = JSON.parse(localStorage.getItem("myCart"));
    setTotalProductsCart(getTotalProductsCart);
  }, []);
  const [totalProductsCart, setTotalProductsCart] = useState([]);
  const totalPrice = totalProductsCart.reduce(
    (acc, { count, price }) => (acc += count * price),
    0
  );
  const deleteProductCart = (id) => {
    const newCart = totalProductsCart.filter((product) => product.id !== id);
    localStorage.setItem('myCart', JSON.stringify(newCart));
    setTotalProductsCart(newCart);
  };
  return (
    <Section style={{ minHeight: "75vh" }}>
      <h3 className={s.title}>Cart</h3>
      <div className={s.cartWrapper}>
        <div className={s.cartPartWrapper}>
          <div className={s.cartProductHeadWrapper}>
            <p></p>
            <p></p>
            <p className={s.cartProductHeadText}>Product</p>
            <p className={s.cartProductHeadText}>Price</p>
            <p className={s.cartProductHeadText}>Quantity</p>
            <p className={s.cartProductHeadText}>Subtotal</p>
          </div>
          {!!totalProductsCart.length &&
            totalProductsCart.map(
              ({ name, price, characters, photo, link, id, count }) => (
                <>
                  <div className={s.cartProductHeadWrapper}>
                    <CloseRounded
                      onClick={() => deleteProductCart(id)}
                      sx={{ cursor: "pointer" }}
                    />
                    <img src={`${process.env.PUBLIC_URL}/${photo}`} alt="" />
                    <p>{name}</p>
                    <p>₴{price}.00</p>
                    <p>{count}</p>
                    <p>₴{count * price}.00</p>
                  </div>
                  <Divider />
                </>
              )
            )}
        </div>
        <div className={s.cartPartWrapper}>
          <h4 className={s.subTitle}>Cart Totals</h4>
          <ul className={s.cartOrderList}>
            <li className={s.cartOrderItem}>
              <p className={s.cartOrderText}>Subtotal</p>
              <p className={s.cartOrderText}>₴{totalPrice}.00</p>
            </li>
            <li className={s.cartOrderItem}>
              <p className={s.cartOrderText}>Total</p>
              <p className={s.cartOrderText}>₴{totalPrice}.00</p>
            </li>
          </ul>
          <Link to="/order" className={s.cartOrderLink}>
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default CartPage;
