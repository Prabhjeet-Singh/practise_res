"use client";
import { useState } from "react";

const Card = () => {
  const [birthDate, setBirthDate] = useState({
    day: 1,
    month: 1,
    year: 2000,
  });
  const [age,setAge]=useState(0);
  const { day,month,year}=birthDate;
  const handleSubmit = (e) => {
    e.preventDefault();
    const today = new Date();
    const birthDateValue = new Date(
      birthDate.year,
      birthDate.month - 1,
      birthDate.day
    );

    const diffTime = Math.abs(today - birthDateValue);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const ageYears = Math.floor(diffDays / 365);
    setAge(ageYears);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBirthDate((prevData) => ({
      ...prevData,
      [name]: parseInt(value),
    }));
  };


  return (
    <form onSubmit={handleSubmit} >
      <input
        type="number"
        name="day"
        value={day}
        onChange={handleChange}
        min="0"
        max="31"
        required
        className="text-black"
      />
      <span>day</span>

      <input
        type="number"
        name="month"
        value={month}
        onChange={handleChange}
        min="1"
        max="12"
        required
        className="text-black"

      />
      <span>Month</span>
      <input
        type="number"
        name="year"
        value={year}
        onChange={handleChange}
        min="1900"
        max="2022"
        required
        className="text-black"

      />
      <span>Year</span>
      <button type="submit" >Click me</button>
      {/* <div className="text-white">
      <p>{day}</p>
      <p>{month}</p>
      <p>{year}</p>
      </div> */}
      {age>0&&age}
    </form>
  );
};

export default Card;
