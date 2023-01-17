import React from 'react';
import Product from '../product';
import Section from '../section';
import s from './index.module.css';
import {
  AlignHorizontalCenterRounded,
  BatteryChargingFullRounded,
  BluetoothRounded,
  DeveloperBoardRounded,
  HeadphonesRounded,
  PanoramaFishEyeRounded,
} from '@mui/icons-material';
import { Grid } from '@mui/material';

const cards = [
  {
    name: 'Pro V4',
    price: 21,
    link: 'pro-v4',
    characters: [
      {
        title: 'Bluetrum 8892A',
        icon: <DeveloperBoardRounded />,
      },
      {
        title: 'Bluetooth 5.0',
        icon: <BluetoothRounded />,
      },
      {
        title: 'Adjustable Eartips',
        icon: <PanoramaFishEyeRounded />,
      },
      {
        title: 'Well Sound Quality',
        icon: <HeadphonesRounded />,
      },
      {
        title: 'Active Noise Cancelling',
        icon: <AlignHorizontalCenterRounded />,
      },
    ],
  },
  {
    name: 'Pro V4.9 TB',
    price: 52,
    link: 'pro-v4.9-tb',
    characters: [
      {
        title: 'Airoha 1562AE',
        icon: <DeveloperBoardRounded />,
      },
      {
        title: 'Bluetooth 5.3',
        icon: <BluetoothRounded />,
      },
      {
        title: 'Adjustable Eartips',
        icon: <PanoramaFishEyeRounded />,
      },
      {
        title: 'Excellent Sound Quality',
        icon: <HeadphonesRounded />,
      },
      {
        title: 'Active Noise Cancelling',
        icon: <AlignHorizontalCenterRounded />,
      },
    ],
  },
  {
    name: 'Gen 2 V3E',
    price: 27,
    link: 'gen-2-v3e',
    characters: [
      {
        title: 'Airoha 1562E',
        icon: <DeveloperBoardRounded />,
      },
      {
        title: 'Bluetooth 5.2',
        icon: <BluetoothRounded />,
      },
      {
        title: 'Universal Size',
        icon: <PanoramaFishEyeRounded />,
      },
      {
        title: 'Sounds as good as retail',
        icon: <HeadphonesRounded />,
      },
      {
        title: 'Six hours battery life',
        icon: <BatteryChargingFullRounded />,
      },
    ],
  },
  {
    name: 'Gen 3 V1.3',
    price: 39,
    link: 'gen-3-v1.3',
    characters: [
      {
        title: 'BES 2500YP',
        icon: <DeveloperBoardRounded />,
      },
      {
        title: 'Bluetooth 5.2',
        icon: <BluetoothRounded />,
      },
      {
        title: 'Universal Size',
        icon: <PanoramaFishEyeRounded />,
      },
      {
        title: 'Good Sound Quality',
        icon: <HeadphonesRounded />,
      },
      {
        title: 'Six hours battery life',
        icon: <BatteryChargingFullRounded />,
      },
    ],
  },
];

const ProductSection = () => {
  return (
    <Section>
      <div className={s.line}></div>
      <Grid container spacing={2} columns={16}>
        {cards.map((card) => <Product card={card}/>)}
      </Grid>
    </Section>
  );
};

export default ProductSection;
