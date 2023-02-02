import { Grid } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import LinkList from '../../components/linkList';
import Product from '../../components/product';
import Section from '../../components/section';
import { cards } from '../../data/product';
import s from './index.module.css';

const CategoryPage = () => {
  const location = useLocation();
  const categoryProducts = cards.filter(
    card => card.categoryLink === location.pathname.split('/')[2],
  );
  const category = categoryProducts[0].category;
  return (
    <Section style={{minHeight: "70vh"}}>
      <LinkList category={category} />
      <h3 className={s.title}>{category}</h3>
      <Grid container spacing={2} columns={16}>
        {categoryProducts.map(card => (
          <Product card={card} />
        ))}
      </Grid>
    </Section>
  );
};

export default CategoryPage;
