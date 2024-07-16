import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/header/Header';
import Exploremenu from '../../components/exploremenu/Exploremenu';

const Home = () => {

    const [category,setCategory] = useState("All");

  return (
    <div>
        <Header/>
        <Exploremenu category={category} setCategory={setCategory} />
    </div>
  )
}

export default Home;