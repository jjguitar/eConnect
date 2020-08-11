import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [users, setUsers] = useState({ myList: [], users: [] });

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  console.log(users);
  console.log(users.users);
  return users;
};

export default useInitialState;
