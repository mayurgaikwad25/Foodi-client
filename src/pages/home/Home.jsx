import React from 'react'
import Banner from '../../components/Banner';
import Categories from './Categories';
import Specialdishes from './Specialdishes';
import Testimonials from './Testimonials';

const Home = () => {
  return (
    <div>
      <Banner/>
      <Categories/>   
      <Specialdishes/>
      <Testimonials/>
    </div>
  )
}

export default Home;