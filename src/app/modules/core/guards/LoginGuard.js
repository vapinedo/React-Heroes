import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "@core/context/auth/authContext";

export const LoginGuard = ({ children }) => {
    const { user } = useContext(AuthContext);
    return user.logged ? <Navigate to="/marvel" /> : children;
}
