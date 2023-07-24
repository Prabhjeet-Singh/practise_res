'use client'
import { useState } from "react";

const Card = () => {
    const[birthDate,setBirthDate]=useState({
        day:1,
        month:1,
        year:2000
    })
  return <div>{birthDate.day}</div>;
};

export default Card;
