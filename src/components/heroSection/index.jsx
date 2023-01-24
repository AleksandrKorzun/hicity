import React from 'react';
import { ArrowRightAltOutlined } from '@mui/icons-material';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Section from '../../components/section';
import s from './index.module.css';

const HeroSection = () => {
  return (
    <Section>
      <Box className={s.heroWrapper}>
        <Box className={s.partWrapper}>
          <h3
            variant="h2"
            className={s.title}
          >
            The quickest and safest way to order your AirReps​
          </h3>
          <h3
            variant="h4"
            className={s.subTitle}
          >
            Tired of the slow and complicated process of ordering reps? Then try
            this website, we promise it won’t just be easy it will also be fast!
          </h3>
          <Link
            className={s.linkHero}
            to="/store"
          >
            <span
              className={s.span}
            >
              Shop now
            </span>
            <ArrowRightAltOutlined />
          </Link>
        </Box>
        <Box className={s.wrapperImage}>
          <img src={`${process.env.PUBLIC_URL}/hero.png`} alt="heroImage" />
        </Box>
      </Box>
    </Section>
  );
};

export default HeroSection;
