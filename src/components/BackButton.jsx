import React from 'react';
import { IoArrowBackCircle } from "react-icons/io5";
import './BackButton.css';


const BackButton = () => {
  return (

    <div onClick={() => window.history.back()} className="back-button"><IoArrowBackCircle /></div>

  );
};

export default BackButton;
