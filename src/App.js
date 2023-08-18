import React from 'react'
import PrimarySearchAppBar from './HomeComponent/Navbar';
import Navslider from './HomeComponent/Slider';
import AddBanner from './HomeComponent/AddBanner';
import Categorie from './HomeComponent/Categories';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductOne from './ProductList/ProductOne';

const App = () => {
  return (
    <>
      <PrimarySearchAppBar />
      <Navslider />
      <AddBanner />
      <Categorie />

      <BrowserRouter>
        <Routes>
          <Route path="/productone" element={<ProductOne />}>
            hai
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;