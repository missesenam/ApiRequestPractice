import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retriveRandom, resetBeforeFetch } from "../slices/RandomUserSlice";

const RandomUserGenerator = () => {
  const { randomUsers, isLoading, error } = useSelector(
    (state) => state.randomusers
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retriveRandom());
  }, [dispatch]);

  // const handleUserGenerator = () => {
  //   setIsLoading(true);
  //   setError(null);
  //   setRandomUser([]);
  //   retriveRandom();
  // };
  const handleGenerateUser = () => {
    dispatch(resetBeforeFetch());
    dispatch(retriveRandom(Date.now()));
  };
  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">
        Random User Generator
      </h1>
      {/* spinner */}
      {isLoading && (
        <button
          type="button"
          className="flex items-center bg-indigo-500 text-white font-medium px-4 py-2 rounded-lg disabled:opacity-50"
          disabled
        >
          <svg
            className="mr-2 h-5 w-5 animate-spin text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
          Processing…
        </button>
      )}
      {/* errr */}
      {error && (
        <p className="text-red-700">
          error while fecthing data, check your origin
        </p>
      )}

      {/* User Information */}

      {randomUsers.map((user, index) => (
        <div key={index} className="flex flex-col items-center gap-2">
          <img
            src={user.picture.large}
            alt="Profile"
            className="w-24 h-24 rounded-full mb-2"
          />
          <p className="text-lg font-semibold">Name: {user.name.last}</p>
          <p>Gender: {user.gender}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
      {/* Button to Fetch New User */}
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        onClick={handleGenerateUser}
      >
        Get New User
      </button>
    </div>
  );
};

export default RandomUserGenerator;
