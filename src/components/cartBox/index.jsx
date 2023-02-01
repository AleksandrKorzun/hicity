import { CloseRounded } from '@mui/icons-material';
import { Divider } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import s from './index.module.css';

const CartBox = ({ products, handleClose }) => {
  const totalPrice = products.reduce(
    (acc, { count, price }) => (acc += count * price),
    0,
  );
  return (
    <div className={s.cartBoxWrapper}>
      <CloseRounded onClick={handleClose} className={s.iconClose}/>
      <ul className={s.cartBoxList}>
        {products.map(({ photo, name, count, price, id, link }) => (
          <li key={id} className={s.cartBoxItem}>
            <Link to={`/product/${link}`} onClick={handleClose} className={s.wrapperProduct}>
              <img
                src={`${process.env.PUBLIC_URL}/${photo}`}
                alt={photo}
                width="50%"
              />
              <div className={s.wrapperInfoProduct}>
                <h3 className={s.titleName}>{name}</h3>
                <p className={s.textPrice}>
                  {count} * ₴ {price}.00
                </p>
              </div>
            </Link>
            <Divider />
          </li>
        ))}
      </ul>
      <p className={s.totalPriceText}>
        <strong>Subtotal: </strong>₴ {totalPrice}.00
      </p>
      <Divider />
      <div className={s.wrapperLink}>
        <Link to="/cart" className={s.cartBoxLink} onClick={handleClose}>
          Переглянути корзину
        </Link>
        <Link to="/order" className={s.cartBoxLink + ' ' + s.cartBoxLinkSecond} onClick={handleClose}>
          Оформити замовлення
        </Link>
      </div>
    </div>
  );
};

export default CartBox;
