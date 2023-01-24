import {
  HeadphonesOutlined,
  LocalShippingOutlined,
  PaidOutlined,
  ThumbUpAltRounded,
} from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Section from '../section';
import s from './index.module.css';

const BenefitsSection = () => {
  return (
    <Section>
      <Grid container spacing={2} columns={16}>
        <Grid item md={4} xs={16}>
          <LocalShippingOutlined  sx={{color: "#abb8c3", marginBottom: "20px", width: "20%"}}/>
          <h3 variant="h4" className={s.subTitle}>
            Tracked shipping - get your products delivered to your door, and
            track it on its journey
          </h3>
        </Grid>
        <Grid item md={4} xs={16}>
          <HeadphonesOutlined  sx={{color: "#abb8c3", marginBottom: "20px", width: "20%"}}/>
          <h3 variant="h4" className={s.subTitle}>
            Best and newest products on the market - we want you to have the
            latest and greatest!
          </h3>
        </Grid>
        <Grid item md={4} xs={16}>
          <PaidOutlined  sx={{color: "#abb8c3", marginBottom: "20px", width: "20%"}}/>
          <h3 variant="h4" className={s.subTitle}>
            Tracked shipping - get your products delivered to your door, and
            track it on its journey
          </h3>
        </Grid>
        <Grid item md={4} xs={16}>
          <ThumbUpAltRounded  sx={{color: "#abb8c3", marginBottom: "20px", width: "20%"}}/>
          <h3 variant="h4" className={s.subTitle}>
            Tracked shipping - get your products delivered to your door, and
            track it on its journey
          </h3>
        </Grid>
      </Grid>
    
    </Section>
  );
};

export default BenefitsSection;
