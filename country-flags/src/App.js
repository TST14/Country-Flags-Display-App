import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className="containerStyle">
      {countries.map((country) => (
        <div key={country.cca3} className="cardStyle">
          <img
            src={country.flags.png}
            alt={`Flag of ${country.name.common}`}
            className="imageStyle"
          />
          <h2>{country.name.common}</h2>
        </div>
      ))}
    </div>
  );
}
