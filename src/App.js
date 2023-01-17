import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import { Context } from './context';
import CategoryPage from './pages/categoryPage';
import HomePage from './pages/homePage';
import ProductPage from './pages/productPage';
import StorePage from './pages/storePage';

function App() {
  useEffect(() => {
    const getTotalProductsCart = JSON.parse(localStorage.getItem('myCart'));
    setTotalProductsCart(getTotalProductsCart);
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
  return (
    <Context.Provider
      value={{
        addToCart,
        totalProductsCart,
      }}
    >
      <Routes>
        <Route element={<Layout totalProductsCart={totalProductsCart} />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/product-category/:id" element={<CategoryPage />} />
        </Route>
      </Routes>
    </Context.Provider>
  );
}

export default App;