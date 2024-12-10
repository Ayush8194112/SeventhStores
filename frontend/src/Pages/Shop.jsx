import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
// import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import Home from '../Components/Home/Home'


const Shop = () => {
  return (
    <div>
    <Home/>
      <Hero/>
      <Popular/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

export default Shop
