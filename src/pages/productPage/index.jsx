import React, { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LinkList from '../../components/linkList';
import Section from '../../components/section';
import { Context } from '../../context';
import { cards } from '../../data/product';
import s from './index.module.css';

const ProductPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { addToCart } = useContext(Context);
  const location = useLocation();
  const card = cards.filter(card => card.link === location.pathname.split('/')[2]);
  const onClick = () => addToCart(card[0]);
  const [{ name, price, characters, photo, link, category, description }] = card;
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
          <a href='https://www.youtube.com/watch?v=iKVrx5Vx1rs&ab_channel=MusicBoxPH' className={s.text}>Відео обзор</a>
          <p className={s.textPrice}>₴ {price}.00</p>
          <button onClick={onClick} className={s.buttonCard}>
            ADD TO CART
          </button>
        </div>
      </div>
    </Section>
  );
};

export default ProductPage;
