import React from 'react';
import useLoader from '../hooks/useLoader';
import { UserContext } from '../common/context';
import Loader from './Loader';

export default function UserProvider({ children }) {
  const userContext = useLoader('users');
  const [users, loading] = userContext;
  return (
    <UserContext.Provider value={userContext}>
      {loading || users.length === 0 ? <Loader /> : children}
    </UserContext.Provider>
  );
}
