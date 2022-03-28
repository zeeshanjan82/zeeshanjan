
import React, { createContext } from 'react';
const AppStateContext = createContext();

export function AppProvider({ children }) {

  let sharedState = { };

  return (
    <AppStateContext.Provider value={sharedState}>
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
const state = React.useContext(AppStateContext);

if (state === undefined) {
    throw new Error('useAppState must be used within a AppProvider');
}

return state;
}