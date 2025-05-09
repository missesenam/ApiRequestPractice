import React, { useEffect } from "react";
import axios from "axios";

const Axios = () => {
  // axios with get method
  const retrieveData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    retrieveData();
  }, []);
  // return statement
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-lg">
      <h2 className="text-xl font-semibold mb-4">User List</h2>
      <p>Loading...</p>
      <p className="text-red-500"></p>
      <ul>
        <li className="p-2 border-b">ddg</li>
        <li className="p-2 border-b">ddg</li>
        <li className="p-2 border-b">ddg</li>
      </ul>
    </div>
  );
};

export default Axios;
