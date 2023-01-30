import React from "react";
import { ArrowRightAltOutlined } from "@mui/icons-material";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import Section from "../../components/section";
import s from "./index.module.css";

const HeroSection = () => {
  return (
    <Section>
      <Box className={s.heroWrapper}>
        <Box className={s.partWrapper}>
          <h3 variant="h2" className={s.title}>
            Топові репліки навушників AirPods. Низькі ціни, швидка обробка
            замовлення, безпечна доставка (через OLX).
          </h3>
          <h3 variant="h4" className={s.subTitle}>
            Не можете обрати яку модель вам потрібно? Заплутались в чому
            відмінність чіпів? Цей сайт допоможе вам знайти відповіді на всі
            питання. Замовляти в нас дуже просто.
          </h3>
          <Link className={s.linkHero} to="/store">
            <span className={s.span}>Купити</span>
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
