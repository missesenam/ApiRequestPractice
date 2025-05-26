import { useState } from "react";

const NewsFilter = () => {
  const categories = [
    "All",
    "Business",
    "Entertainment",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];

  return (
    <div className="w-full max-w-xs mx-auto my-4">
      <label className="block text-gray-700 font-semibold mb-2">
        Filter by Category
      </label>
      <select className="w-full p-2 border border-blue-600 rounded-lg shadow-sm focus:outline-none focus:border-none  focus:ring-2 focus:ring-blue-500 cursor-pointer">
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default NewsFilter;
