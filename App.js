
import React, { useState, useEffect } from 'react';
import {'https://gorest.co.in/public/v2/users' } from 'react-router-dom';

const UserList = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch ("https://gorest.co.in/public/v2/users")
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error('Error fetching user data:', error));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {userData.map((user) => (
          <li key={user.id}>
            <Link to={/user/${user.id}}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;