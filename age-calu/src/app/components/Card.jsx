"use client";

import { useState } from "react";

export const Card = () => {
  const [birthDate,setBirthDate]=useState({
    day:1,
    month:1,
    year:1900
  })
  const handleClick=(event)=>{
   event.preventDefault();
   console.log(birthDate.day)
   console.log(birthDate.month)
   console.log(birthDate.year)
  }
  const handleOnChange=(e)=>{
    const { name, value } = e.target;
    setBirthDate((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  return (
  <form className="text-white">
    <label htmlFor="day">Day</label>
    <input type="number" className="text-black"  value={birthDate.day} onChange={handleOnChange} min="1" max="31" required/>
    <label htmlFor="month">month</label>
    <input type="number" className="text-black"  value={birthDate.month} onChange={handleOnChange} min="1"  max="12" required/>
    <label htmlFor="year">year</label> 
    <input type="number" className="text-black" value={birthDate.year} onChange={handleOnChange} min="1900" max="2022" required />
    <button onSubmit={handleClick} type="submit">Click</button>
    </form> 
    );
};

// export default Card;
