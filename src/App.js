import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner.jsx'
import PetList from './components/PetList.jsx';
import Poster from './components/Poster.jsx'
import ProductList from './components/ProductList.jsx';
import Sellers from './components/Sellers.jsx';
import Footer from './components/Footer.jsx';


function App() {
 
  return (
    <div >
      <Navbar />
      <Banner />
      <PetList/>
      <Poster />
      <ProductList/>
      <Sellers />
      <Footer/>
      
      
      
    </div>
  );
}

export default App;
