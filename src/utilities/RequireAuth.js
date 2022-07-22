import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../Context/Auth/Auth';

const RequireAuth = ({ children }) => {
  const { tokenValue } = useAuth();
  const location = useLocation();
  return tokenValue ? (
    children
  ) : (
    <Navigate
      to='/login'
      state={{ from: location.pathname }}
      replace
    ></Navigate>
  );
};
export { RequireAuth };
