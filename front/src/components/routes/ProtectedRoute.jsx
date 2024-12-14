import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const userInfo = useSelector(
    (state) => state.userInfo
  );
  const isLoggedIn = !!userInfo;

  if (!isLoggedIn) {
    return (
      <Navigate to="/login" replace={true} />
    );
  }

  return children;
};

export default ProtectedRoute;
