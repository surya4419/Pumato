import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/header/Header';
import Exploremenu from '../../components/exploremenu/Exploremenu';
import Fooddisplay from '../../components/fooddisplay/Fooddisplay';
import Appdownload from '../../components/appdownload/Appdownload.jsx';

const Home = () => {

    const [category,setCategory] = useState("All");

  return (
    <div>
        <Header/>
        <Exploremenu category={category} setCategory={setCategory} />
        <Fooddisplay category={category} />
        <Appdownload/>
    </div>
  )
}

export default Home;