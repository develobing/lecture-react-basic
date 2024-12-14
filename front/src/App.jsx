import Login from './components/Login';
import ProtectedRoute from './components/routes/ProtectedRoute';
import Todo from './components/Todo';
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <Login email="robin@google.com" />
          }
        />

        <Route
          path="/todo"
          element={
            <ProtectedRoute>
              <Todo />
            </ProtectedRoute>
          }
        />

        <Route
          path="*"
          element={<Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
