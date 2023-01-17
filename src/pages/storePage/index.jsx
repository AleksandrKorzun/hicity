import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import Product from '../../components/product';
import Section from '../../components/section';
import { cards } from '../../data/product';
import s from './index.module.css';



const StorePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Section>
      <h2 className={s.title}>Store</h2>
      <Grid container spacing={2} columns={16}>
        {cards.map((card) => <Product card={card}/>)}
      </Grid>
    </Section>
  );
};

export default StorePage;
