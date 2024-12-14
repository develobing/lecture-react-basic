import { createContext, useState } from 'react';

const UserContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const isLoggedIn = !userInfo;

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        userInfo,
        setUserInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserContext = createContext();

export default UserContextProvider;
