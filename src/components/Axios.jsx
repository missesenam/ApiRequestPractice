import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveData } from "../slices/AxiosSlice";

const Axios = () => {
  const { users, isLoading, error } = useSelector((state) => state.theusers);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retrieveData());
  }, [dispatch]);
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
