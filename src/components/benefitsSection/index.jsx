import {
  HeadphonesOutlined,
  LocalShippingOutlined,
  PaidOutlined,
  ThumbUpAltRounded,
} from "@mui/icons-material";
import { Grid } from "@mui/material";
import React from "react";
import Section from "../section";
import s from "./index.module.css";

const BenefitsSection = () => {
  return (
    <Section>
      <Grid container spacing={2} columns={16}>
        <Grid item md={4} xs={16}>
          <LocalShippingOutlined
            sx={{ color: "#abb8c3", marginBottom: "20px", width: "20%" }}
          />
          <h3 variant="h4" className={s.subTitle}>
            В наявності завжди всі навушники. Поставки напряму від виробника з
            Китаю.
          </h3>
        </Grid>
        <Grid item md={4} xs={16}>
          <HeadphonesOutlined
            sx={{ color: "#abb8c3", marginBottom: "20px", width: "20%" }}
          />
          <h3 variant="h4" className={s.subTitle}>
            Слідкуємо за новинами на ринку. Ми хчоемо щоб у вас було найкраще та
            найновіше.
          </h3>
        </Grid>
        <Grid item md={4} xs={16}>
          <PaidOutlined
            sx={{ color: "#abb8c3", marginBottom: "20px", width: "20%" }}
          />
          <h3 variant="h4" className={s.subTitle}>
            YouTube канал де ви можете побачити відео огляди та порівняння. Тест
            мікрофонів.
          </h3>
        </Grid>
        <Grid item md={4} xs={16}>
          <ThumbUpAltRounded
            sx={{ color: "#abb8c3", marginBottom: "20px", width: "20%" }}
          />
          <h3 variant="h4" className={s.subTitle}>
            Доступна ціна – ми хочемо, щоб наша продукція подобалася кожному,
            незалежно від вашого фінансового становища.
          </h3>
        </Grid>
      </Grid>
    </Section>
  );
};

export default BenefitsSection;
