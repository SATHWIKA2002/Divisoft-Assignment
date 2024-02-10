
import React from 'react';
import UserDetails from './userdetails.js';

const UserDetailsPage = ({ match }) => {
  const userId = match.params.id;
  const user = {
    id: 1,
    name: 'Patricia Taylor',
    nickName: 'Jackson',
    phone: '13486652378',
    age: 21,
    gender: 'Male',
    email: 'h.evlkqcxcc@biqjvpl.ky'
  };

  return (
    <div>
      <h1>User Details</h1>
      <UserDetails user={user} />
    </div>
  );
};

export default UserDetailsPage;