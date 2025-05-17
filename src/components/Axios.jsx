import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Axios = () => {
  const [users, setUsers] = useState([]);
  // axios with get method
  const retrieveData = async () => {
    try {
      const todo = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(todo.tasks);
      setUsers(todo.tasks);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    retrieveData();
  }, []);

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-lg">
      <h2 className="text-xl font-semibold mb-4">User List</h2>
      {/* <p>Loading...</p> */}
      <p className="text-red-500 text-4xl">list</p>
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
