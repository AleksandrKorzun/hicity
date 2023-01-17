import React from 'react';
import s from './index.module.css';

const Section = ({ children, ...props }) => {
  return (
    <section className={s.section} {...props}>
      <div className={s.container}>{children}</div>
    </section>
  );
};

export default Section;
