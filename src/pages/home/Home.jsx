import React from 'react'
import Banner from '../../components/Banner';
import Categories from './Categories';
import Specialdishes from './Specialdishes';

const Home = () => {
  return (
    <div>
      <Banner/>
      <Categories/>   
      <Specialdishes/>
    </div>
  )
}

export default Home;