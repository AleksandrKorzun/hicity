import React from 'react';
import { Link } from 'react-router-dom';
import s from './index.module.css';

const LinkList = ({ category, name }) => {
  return (
    <ul className={s.listLink}>
      <li>
        <Link to="/" className={s.link}>
          Home
        </Link>
        <span> / </span>
      </li>
      <li>
        <Link
          to={`/product-category/${category
            .toLowerCase()
            .split(' ')
            .join('-')}`}
          className={s.link}
        >
          {`${category}`}
        </Link>
        {name && <span> / </span>}
      </li>
      {name && (
        <li>
          <p className={s.link}>{name}</p>
        </li>
      )}
    </ul>
  );
};

export default LinkList;
