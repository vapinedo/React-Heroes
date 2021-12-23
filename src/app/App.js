import "./App.css";
import { AppRouting } from '@app/AppRouting';
import { useEffect, useReducer } from 'react';
import { AuthContext } from '@core/context/auth/authContext';
import { authReducer } from '@core/context/auth/authReducer';

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

export function App() {

  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    if (!user) return;
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  
  return (
    <AuthContext.Provider value={{
      user,
      dispatch
    }}>
      <AppRouting />
    </AuthContext.Provider>
  );
}