import React, { createContext, useState } from 'react';

const defaultState = {
  members: [],
  setMembers: () => {},
};

const AppContext = createContext(defaultState)

const AppProvider = ({ children }) => {
  const [members, setMembers] = useState([])

  return (
    <AppContext.Provider
      value={{
        members,
        setMembers,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext

export { AppProvider }
