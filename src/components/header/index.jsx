import { ShoppingBagOutlined } from '@mui/icons-material';
import { Box, IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartBox from '../cartBox';
import s from './index.module.css';

const Header = ({ totalProductsCart }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const countTotal = totalProductsCart.reduce(
    (acc, item) => (acc += item.count),
    0,
  );
  return (
    <header className={s.header}>
      <Link to="/">
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" />
      </Link>
      <div className={s.navWrapper}>
        <nav>
          <NavLink to="/store" className={s.navigation}>
            Store
          </NavLink>
        </nav>

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open cart" position="relative">
            <IconButton onClick={handleClick} sx={{ p: 0 }}>
              <ShoppingBagOutlined
                sx={{ color: 'grey', width: '30px', height: '30px' }}
              />
              {!!countTotal && <p className={s.cartNumber}>{countTotal}</p>}
            </IconButton>
          </Tooltip>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            sx={{
              transform: 'translate(-80px, 10px)',
            }}
          >
            {!!totalProductsCart.length ? (
              <CartBox products={totalProductsCart}/>
            ) : (
              <p className={s.cartText}>No products in the cart </p>
            )}
          </Menu>
        </Box>
      </div>
    </header>
  );
};

export default Header;
