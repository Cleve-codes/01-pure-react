/**
 * When creating context, there is normally a conventional way,
 * or rather boilerplate on doing it.
 * This includes 3 steps which are:
 *  i) Creating the context
 *  ii) Creating the provider
 *  iii) Finally comes the hook
 *
 */

import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

// Step 1
const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(action, state) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };

    case "logout":
      return { ...state, user: null, isAuthenticated: false };

    default:
      throw new Error("Unknown action");
  }
}

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};


function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(email, password) {
    if(email === FAKE_USER.email && password === FAKE_USER.password) dispatch({type: "login", payload: FAKE_USER})
  }

  function logout() {
    dispatch({type: "logout"})
  }

  return (
    <AuthContext.Provider value={(user, isAuthenticated, login, logout)}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
}

AuthProvider.propTypes = {
  children: PropTypes.any.isRequired,
}

export { AuthProvider, useAuth };