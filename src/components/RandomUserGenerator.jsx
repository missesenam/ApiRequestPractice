import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
// Goal: Fetch random user data and display it on a webpage.

// Steps:

// Use the Random User API: https://randomuser.me/api/

// Display user information such as name, gender, email, and profile picture.

// Add a button to fetch a new random user.

// Challenge: Implement a loading spinner while fetching the data.

const RandomUserGenerator = () => {
  const [randomUsers, setRandomUser] = useState([]);

  const retriveRandom = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    retriveRandom();
  }, []);
  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">
        Random User Generator
      </h1>
      {/* spinner */}
      <button
        type="button"
        class="flex items-center bg-indigo-500 text-white font-medium px-4 py-2 rounded-lg disabled:opacity-50"
        disabled
      >
        <svg
          class="mr-2 h-5 w-5 animate-spin text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>
        Processing…
      </button>

      {/* User Information */}
      <div className="text-center">
        <img src="" alt="Profile" className="w-24 h-24 rounded-full mb-2" />
        <p className="text-lg font-semibold">Name: John Doe</p>
        <p>Gender: Male</p>
        <p>Email: john.doe@example.com</p>
      </div>
      {/* Button to Fetch New User */}
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Get New User
      </button>
    </div>
  );
};

export default RandomUserGenerator;
