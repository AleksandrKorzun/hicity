import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import { Context } from './context';
import CartPage from './pages/cartPage';
import CategoryPage from './pages/categoryPage';
import HomePage from './pages/homePage';
import OrderPage from './pages/orderPage';
import ProductPage from './pages/productPage';
import StorePage from './pages/storePage';

function App() {
  useEffect(() => {
    getProductCart();
  }, []);
  const [totalProductsCart, setTotalProductsCart] = useState([]);
  const addToCart = card => {
    const similarProductCart = JSON.parse(
      localStorage.getItem('myCart'),
    ).filter(item => item.id === card.id);
    if (similarProductCart.length === 0) {
      const newCart = [
        ...JSON.parse(localStorage.getItem('myCart')),
        { ...card, count: 1 },
      ];
      localStorage.setItem('myCart', JSON.stringify(newCart));
      setTotalProductsCart(newCart);
    } else {
      const cartWithoutSimilarProduct = JSON.parse(
        localStorage.getItem('myCart'),
      ).filter(item => item.id !== card.id);
      const newCart = [
        ...cartWithoutSimilarProduct,
        { ...card, count: similarProductCart[0].count + 1 },
      ];
      localStorage.setItem('myCart', JSON.stringify(newCart));
      setTotalProductsCart(newCart);
    }
  };
  const getProductCart = () => {
    const getTotalProductsCart = JSON.parse(localStorage.getItem('myCart'));
    setTotalProductsCart(getTotalProductsCart);
  }
  const deleteProductCart = (id) => {
    const newCart = totalProductsCart.filter((product) => product.id !== id);
    localStorage.setItem('myCart', JSON.stringify(newCart));
    setTotalProductsCart(newCart);
  };
  return (
    <Context.Provider
      value={{
        addToCart,
        getProductCart,
        totalProductsCart,
      }}
    >
      <Routes>
        <Route element={<Layout totalProductsCart={totalProductsCart} />}>
          <Route path="https://mistoreplic.com.ua/" element={<HomePage />} />
          <Route path="https://mistoreplic.com.ua/home" element={<Navigate to="/" replace />} />
          <Route path="https://mistoreplic.com.ua/store" element={<StorePage />} />
          <Route path="https://mistoreplic.com.ua/product/:id" element={<ProductPage />} />
          <Route path="https://mistoreplic.com.ua/product-category/:id" element={<CategoryPage />} />
          <Route path="https://mistoreplic.com.ua/cart" element={<CartPage totalProductsCart={totalProductsCart} deleteProductCart={deleteProductCart}/>} />
          <Route path="https://mistoreplic.com.ua/order" element={<OrderPage />} />
        </Route>
      </Routes>
    </Context.Provider>
  );
}

export default App;
