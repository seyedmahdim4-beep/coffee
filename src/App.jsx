import React, { useState } from 'react'
import Header from './components/Header'
import Shopping from './components/Shopping';
import Home from './components/Home';
import Products from './components/Products';
import CategoryBanner from './components/CategoryBanner';
import Category from './components/Category';
import BestSells from './components/BestSells';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs'
import Services from './components/Services'
import CoffeeClub from './components/CoffeeClub'
import Blogs from './components/Blogs'
import './App.css'
import { productsData } from './data/ProductsData';




function App() {
  const [products, setProducts] = useState(productsData)
  const [shoppingOpen, setShoppingOpen] = useState(false);


  return (
    < >
      
        <Header setShoppingOpen={setShoppingOpen} />
        <Shopping
          setShoppingOpen={setShoppingOpen}
          shoppingOpen={shoppingOpen}
          
        />
        <Home />
        <Products
          products={products}
          setProducts={setProducts} />
        <CategoryBanner />
        <Category />
        <BestSells />
        <CoffeeClub />
        <Blogs />
        <ContactUs />
        <Services />
        <Footer />
      









    </>

  )
}

export default App