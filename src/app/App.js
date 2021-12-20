import { AuthContext } from '@auth/authContext';
import { AppRouter } from '@app/AppRouter';
import { useReducer } from 'react';
import { authReducer } from '@auth/authReducer';

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

export function App() {

  const [user, dispatch] = useReducer(authReducer, {}, init);
  
  return (
    <AuthContext.Provider value={{
      user,
      dispatch
    }}>
      <AppRouter />
    </AuthContext.Provider>
  );
}