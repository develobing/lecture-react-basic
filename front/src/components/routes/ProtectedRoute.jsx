import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const state = useSelector((state) => state);
  const isLoggedIn = !!state.userInfo;

  if (!isLoggedIn) {
    return (
      <Navigate to="/login" replace={true} />
    );
  }

  return children;
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
