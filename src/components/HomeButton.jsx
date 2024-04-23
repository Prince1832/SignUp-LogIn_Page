import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import './HomeButton.css';


const HomeButton = () => {
  return (
 
    <Link to="/" className="home-button"><AiFillHome /></Link>
  
  );
};

export default HomeButton;
