import React from 'react'
import MainBanner from '../components/MainBanner'
import Categories from '../components/Categories'
import BestSeller from '../components/BestSeller'
import BottomBanner from '../components/BottomBanner'
import NewsLetter from '../components/NewsLetter'
// import AllProducts from './AllProducts';
// import Footer from '../components/Footer'




const Home = () => {
  return (
    <div className=''>
      <MainBanner  />
      <Categories />
      <BestSeller />
{/*     <ALLProducts/> */}
      <BottomBanner />
      <NewsLetter />

    </div>
  )
}

export default Home
