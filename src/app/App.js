import { AuthContext } from '@auth/authContext';
import { AppRouter } from '@app/AppRouter';
import { useEffect, useReducer } from 'react';
import { authReducer } from '@auth/authReducer';

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
      <AppRouter />
    </AuthContext.Provider>
  );
}