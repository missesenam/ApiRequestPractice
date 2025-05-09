import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  const exercises = [
    { id: 1, name: "Random User Generator", path: "/random-user" },
    { id: 2, name: "Country Information App", path: "/country-info" },
    { id: 3, name: "News Headlines Fetcher", path: "/news" },
    { id: 4, name: "Weather Checker", path: "/weather" },
    { id: 5, name: "Movie Search App", path: "/movie-search" },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 uppercase">
        API Exercises
      </h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {exercises.map((exercise) => (
          <div
            key={exercise.id}
            className="p-4 bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105"
          >
            <Link
              to={exercise.path}
              className="text-xl font-semibold text-blue-600 hover:text-blue-800"
            >
              {exercise.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
