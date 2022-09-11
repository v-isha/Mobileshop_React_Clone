import React from 'react'
import PreNavbar from './components/PreNavbar/PreNavbar'
import Navbar from './components/Navbar/Navbar'
import '../src/App.css'
import {BrowserRouter} from 'react-router-dom'
import Slider from './components/Slider/Slider'
import data from './data/data.json'
import Offers from './components/Offers/Offers'
import Heading from './components/Heading/Heading'
import StarProduct from './components/StarProduct/StarProduct'
import HotMenu from './components/HotMenu/HotMenu'
import ProductReviews from './components/ProductReviews/ProductReviews'
import Footer from './components/Footer/Footer'





function App() {
  return (
      <BrowserRouter>
        
              <PreNavbar/>
              <Navbar/> 
              <Slider/>
              <Offers offer={data.offer}/>
              <Heading text="STAR PRODUCTS"/>
              <StarProduct starproduct={data.starProduct}/>
              <Heading text="HOT ACCESSORIES"/>
              <HotMenu/>
              <Heading text="PRODUCT PREVIEWS"/>
              <ProductReviews  productReviews={data.productReviews}/>
              <Footer footer={data.footer}/>

      </BrowserRouter>
               

    
  )
}

export default App