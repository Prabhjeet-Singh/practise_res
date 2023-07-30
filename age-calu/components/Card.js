"use client";
import { useState } from "react";

const Card = () => {
  const [birthDate, setBirthDate] = useState({
    day: 1,
    month: 1,
    year: 2000,
  });
  const [age, setAge] = useState({
    ageDay:0,
    ageMonth:0,
    ageYear:0
  });
  const { day, month, year } = birthDate;


  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (day < 1 || day > 31 || (month === 2 && day > 29) || ((month === 4 || month === 6 || month === 9 || month === 11) && day > 30)) {
      alert('Invalid day selected!');
      return;
    }

    const today = new Date();
    const birthDateValue = new Date(year, month - 1, day);

    const diffTime = Math.abs(today - birthDateValue);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const ageYears = Math.floor(diffDays / 365);
    const remainingDays = Math.floor(diffDays % 365);

    const ageMonths = Math.floor(remainingDays / 30);
    const ageDays = remainingDays % 30;

    
    setAge({
      ageDay:ageDays,
      ageMonth:ageMonths,
      ageYear:ageYears
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBirthDate((prevData) => ({
      ...prevData,
      [name]: parseInt(value),
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Click me</button>
      {/* <div className="text-white">
      <p>{day}</p>
      <p>{month}</p>
      <p>{year}</p>
      </div> */}
     {age.ageDay>0||age.ageMonth>0||age.ageYear>0?(<>
      <p>{age.ageDay}</p>
      <p>{age.ageMonth}</p>
      <p>{age.ageYear}</p>
      </>):0}
    </form>
  );
};

export default Card;
