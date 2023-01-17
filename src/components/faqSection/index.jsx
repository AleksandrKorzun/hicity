import { ArrowDropDownRounded, ArrowRightRounded } from '@mui/icons-material';
import { Divider } from '@mui/material';
import React from 'react';
import Section from '../section';
import s from './index.module.css';

const FaqSection = () => {
  return (
    <Section>
      <div className={s.wrapperFaqSection}>
        <h2 className={s.title}>FAQ</h2>
        <ul className={s.faqList}>
          <li>
            <button type="button" className={s.wrapperItem}>
              <ArrowRightRounded fontSize="large" className={s.icon} />
              <ArrowDropDownRounded fontSize="large" className={s.iconOpen} />
              How long does shipping take?
            </button>
            <p className={s.text}>
              You will have your hands on your order within 2-3 weeks.
            </p>
            <Divider />
          </li>
          <li>
            <button type="button" className={s.wrapperItem}>
              <ArrowRightRounded fontSize="large" className={s.icon} />
              <ArrowDropDownRounded fontSize="large" className={s.iconOpen} />
              Do I get the branded box?
            </button>
            <p className={s.text}>
              Yes and no. You do not get the branded box when paying with
              PayPal. However if you really want it, you can pay with Wise,
              where we will send the branded box. When paying with PayPal you
              will just get a plain white box, without any logos.
            </p>
            <Divider />
          </li>
          <li>
            <button type="button" className={s.wrapperItem}>
              <ArrowRightRounded fontSize="large" className={s.icon} />
              <ArrowDropDownRounded fontSize="large" className={s.iconOpen} />
              Do you provide support?
            </button>
            <p className={s.text}>
              Yes and no. You do not get the branded box when paying with
              PayPal. However if you really want it, you can pay with Wise,
              where we will send the branded box. When paying with PayPal you
              will just get a plain white box, without any logos.
            </p>
            <Divider />
          </li>
          <li>
            <button type="button" className={s.wrapperItem}>
              <ArrowRightRounded fontSize="large" className={s.icon} />
              <ArrowDropDownRounded fontSize="large" className={s.iconOpen} />
              What happens when I have ordered?
            </button>
            <p className={s.text}>
              Once you have ordered through your preferred payment method, you
              will receive a confirmation e-mail that we have received your
              order, and that it is being processed. Once it has been shipped
              (1-5 business days), you will receive another e-mail with a
              tracking number.
            </p>
            <Divider />
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default FaqSection;
