// Goal: Fetch country data based on a user’s input.

// Steps:

// Use the REST Countries API: https://restcountries.com/v3.1/name/{name}

// Get details like population, capital, region, and flag.

// Display the data when the user submits a country name.

// Challenge: Add error handling for invalid country names.

import axios from "axios";
import React, { useState } from "react";

const CountryInformationApp = () => {
  const [country, setCountry] = useState("");
  const [countryInfo, setCountryInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const handleOnchange = (e) => {
    setCountry(e.target.value);
    // console.log(e.target.value);
  };
  const retrieveCountryData = async () => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${country.trim()}`
      );
      // console.log(response);
      setCountryInfo(response.data);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("country not found");
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (country.trim()) {
      // this adds the new country to the array
      // setCountryInfo((prev) => [...prev, country]);
      retrieveCountryData();
      setCountry("");
    }
    setError(null);
  };
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Search Country</h2>
      {/* Input field */}
      <form className="flex mb-6">
        <input
          type="text"
          placeholder="Enter country name"
          value={country}
          name="country"
          className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none"
          onChange={handleOnchange}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700 transition"
          onClick={handleOnSubmit}
        >
          Search
        </button>
      </form>
      {/* error */}
      {error && <p className="text-red-700">country not found</p>}

      {/* Country Details */}
      {countryInfo.map((thecountry, index) => (
        <div key={index}>
          <img
            src={thecountry?.flags?.png}
            alt={thecountry?.flags?.alt}
            className="w-full h-40 object-cover rounded mb-4 border"
          />

          <div className="space-y-2">
            <p className="text-lg">
              <span className="font-semibold">Name:</span>{" "}
              {thecountry.name.common}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Population:</span>{" "}
              {thecountry.population}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Capital:</span>{" "}
              {thecountry.capital}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Region:</span> {thecountry.region}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryInformationApp;
