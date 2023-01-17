import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LinkList from '../../components/linkList';
import Section from '../../components/section';
import { cards } from '../../data/product';
import s from './index.module.css';

const ProductPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // const cart = JSON.parse(localStorage.getItem('myCart'));
  // console.log(cart)
  const location = useLocation();
  const [{ name, price, characters, photo, link, category, description }] =
    cards.filter(card => card.link === location.pathname.split('/')[2]);
  return (
    <Section style={{ height: '75vh' }}>
      <div className={s.wrapper}>
        <div className={s.wrapperBlock}>
          <img src={`${process.env.PUBLIC_URL}/${photo}`} alt={photo} />
        </div>
        <div className={s.wrapperBlock + ' ' + s.informBlock}>
          <LinkList category={category} name={name} />
          <h3 className={s.titleName}>{name}</h3>
          <p className={s.text}>{description}</p>
          <p className={s.textPrice}>$ {price}.00</p>
          <button onClick={() => console.log(1)} className={s.buttonCard}>
            ADD TO CART
          </button>
        </div>
      </div>
    </Section>
  );
};

export default ProductPage;
