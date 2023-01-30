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
    id: "3",
    name: "Gen 2 - 62e",
    price: 1600,
    link: "gen-2-v3e",
    characters: [
      {
        title: 'Airoha - 1562E Tiger',
        icon: <DeveloperBoardRounded />,
      },
      {
        title: 'Bluetooth 5.3',
        icon: <BluetoothRounded />,
      },
      {
        title: 'Класичний дизайн',
        icon: <PanoramaFishEyeRounded />,
      },
      {
        title: 'Якість звуку як в оригінал',
        icon: <HeadphonesRounded />,
      },
      {
        title: 'Мульти-підключення пристроїв',
        icon: <AlignHorizontalCenterRounded />,
      },
    ],
  },
  {
    id: "8",
    name: "Pro - 62ae Tiger",
    price: 2200,
    // photo: "AirPodsPro.png",
    link: "pro-62ae-tiger",
    characters: [
      {
        title: 'Airoha - 1562AE Tiger',
        icon: <DeveloperBoardRounded />,
      },
      {
        title: 'Bluetooth 5.3',
        icon: <BluetoothRounded />,
      },
      {
        title: 'Змінні амбушури',
        icon: <PanoramaFishEyeRounded />,
      },
      {
        title: 'Весь функціонал, як в оригіналі',
        icon: <HeadphonesRounded />,
      },
      {
        title: '6 годин автономної роботи',
        icon: <BatteryChargingFullRounded />,
      },
    ],
  },
  {
    id: "12",
    name: "Pro 2 - Huilian H2S",
    price: 2450,
    link: "pro2-huilian-h2S",
    characters: [
      {
        title: 'Pro 2 - Huilian H2S',
        icon: <DeveloperBoardRounded />,
      },
      {
        title: 'Bluetooth 5.3',
        icon: <BluetoothRounded />,
      },
      {
        title: 'Змінні амбушури',
        icon: <PanoramaFishEyeRounded />,
      },
      {
        title: 'Налаштування звуку, як в оригіналі',
        icon: <HeadphonesRounded />,
      },
      {
        title: 'Керування гучності на навушнику',
        icon: <AlignHorizontalCenterRounded />,
      },
    ],
  },
  {
    id: "15",
    name: "Gen 3 - Huilian A10s",
    price: 1700,
    link: "gen-3-huilian-a10s",
    characters: [
      {
        title: 'Gen 3 - Huilian A10s',
        icon: <DeveloperBoardRounded />,
      },
      {
        title: 'Bluetooth 5.3',
        icon: <BluetoothRounded />,
      },
      {
        title: 'Новий сучасний дизайн',
        icon: <PanoramaFishEyeRounded />,
      },
      {
        title: 'Якість звуку як в оригінал',
        icon: <HeadphonesRounded />,
      },
      {
        title: 'Мульти-підключення пристроїв',
        icon: <AlignHorizontalCenterRounded />,
      },
    ],
  },
];

const ProductSection = () => {
  return (
    <Section>
      <div className={s.line}></div>
      <Grid container spacing={2} columns={16}>
        {cards.map((card, idx) => <Product card={card} idx={idx}/>)}
      </Grid>
    </Section>
  );
};

export default ProductSection;
