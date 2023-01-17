import { FormatQuoteRounded } from '@mui/icons-material';
import React from 'react';
import Section from '../section';
import s from './index.module.css';

const ReviewSection = () => {
  return (
    <Section
      style={{
        backgroundColor: '#F6F6F6',
      }}
    >
      <FormatQuoteRounded
        sx={{
          fill: '#e96c62',
          fontWeight: '500',
          fontSize: '70px',
          marginBottom: "15px",
        }}
      />
      <p className={s.text}>
        I've bought from, and reviewed HiCity's products, since his early
        stages. And I have to say, they're fantastic. Most of his products have
        been really top-quality, and in my opinion, he's cemented his place as
        the "Highest Quality Seller of AirReps" in our book!"
      </p>
      <p className={s.textSign}>Eojin's Reviews</p>
    </Section>
  );
};

export default ReviewSection;
