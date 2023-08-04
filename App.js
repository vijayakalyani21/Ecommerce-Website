import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import { useState } from 'react';

function App() {

  const [product, setProduct] = useState([
    {
      url: 'https://m.media-amazon.com/images/I/61W7QSssfrL._AC_UL600_FMwebp_QL65_.jpg',
      name: 'Designer Earings',
      category: 'EARINGS',
      seller: "Kushal's Fashion",
      price: 499
    },
    {
      url: 'https://m.media-amazon.com/images/I/610n8lva6aL._AC_UL600_FMwebp_QL65_.jpg',
      name: 'Melissa Dangling Earings',
      category: 'EARINGS',
      seller: "kushal's Fashion",
      price: 599
    },
    {
      url: 'https://m.media-amazon.com/images/I/61qrD2VVL+L._AC_UL600_FMwebp_QL65_.jpg',
      name: 'AMZ Laptop 8GB RAM',
      category: 'EARINGS',
      seller: "kushal's Fashion",
      price: 699
    },
    {
      url: 'https://m.media-amazon.com/images/I/71ex1MgPw-L._AC_UL600_FMwebp_QL65_.jpg',
      name: 'MultiColour Nacklace',
      category: 'NECKLACE',
      seller: 'Diva Fashions',
      price: 2699
    },
    {
      url: 'https://m.media-amazon.com/images/I/816v34gn9PL._AC_UL600_FMwebp_QL65_.jpg',
      name: 'Gold Plated Nacklace',
      category: 'NACKLACE',
      seller: 'Diva Fashions',
      price: 2499
    },
    {
      url: 'https://m.media-amazon.com/images/I/71HVQNKyc1L._AC_UL600_FMwebp_QL65_.jpg',
      name: 'Stone Ncklace',
      category: 'NACKLACE',
      seller: 'Diva Fashions',
      price: 2799
    },
    {
      url: 'https://m.media-amazon.com/images/I/71NbkTQGTML._AC_UL600_FMwebp_QL65_.jpg',
      name: 'Rose Gold Crystle Brace',
      category: 'BRACLET',
      seller: 'YouBella',
      price: 199
    },
    {
      url: 'https://m.media-amazon.com/images/I/61JNAzCKcdL._AC_UL600_FMwebp_QL65_.jpg',
      name: 'Stylish MultiLayer Brace',
      category: 'BRACLET',
      seller: 'YouBella',
      price: 249
    },
    {
      url: 'https://m.media-amazon.com/images/I/71wfpfV2LuL._AC_UL600_FMwebp_QL65_.jpg',
      name: 'Blue Stone Stylish',
      category: 'BRACLET',
      seller: 'YouBella',
      price: 299
    },
    {
      url: 'https://m.media-amazon.com/images/I/61Xs7rPJapS._AC_UL600_FMwebp_QL65_.jpg',
      name: 'Metal Combo',
      category: 'FINGER RINGS',
      seller: 'Okos',
      price: 249
    },
    {
      url: 'https://m.media-amazon.com/images/I/71LVJb-r-IL._AC_UL600_FMwebp_QL65_.jpg',
      name: 'Tradition Silver Rings',
      category: 'FINGER RINGS',
      seller: 'Yellow Chimes',
      price: 399
    },
    {
      url: 'https://m.media-amazon.com/images/I/71zb5AqKaFL._AC_UL600_FMwebp_QL65_.jpg',
      name: 'Rhodium Combo',
      category: 'FINGER RINGS',
      seller: 'Okos',
      price: 249, 
    },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }


    </div>
  );
}

export default App;