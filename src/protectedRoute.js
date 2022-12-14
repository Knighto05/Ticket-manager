import {useContext} from "react";
import { Navigate, Outlet, useLocation } from "react-router";
// import {UserContext} from './App';

const useAuth = () => {
//   const {user} = useContext(UserContext);
  const user = { loggedIn: true };
  return user && user.loggedIn;
};

const ProtectedRoute = () => {
    const location = useLocation();
    const isAuth  = useAuth();
  return isAuth ? <Outlet/> : <Navigate to="/" replace state={{from: location}}/>;
};

export default ProtectedRoute;
