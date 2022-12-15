import React from "react";
import CardList from "../components/CardList";
import { NavLink } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {



  return (
    <div>
        <Header/>
        <CardList/>
        <Footer/>
    </div>
  )
}

export default Home
