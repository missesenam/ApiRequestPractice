import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Axios = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  // axios with get method
  const retrieveData = async () => {
    try {
      setIsLoading(true);
      // delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const todo = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(todo.data);
      setUsers(todo.data);
      setError(null);
    } catch (error) {
      console.error(error);
      setError("error fetching data");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    retrieveData();
  }, []);

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-lg">
      <h2 className="text-xl font-semibold mb-4">User List</h2>
      <p className="text-red-500 text-4xl">list</p>
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id} className="border-b">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Axios;
