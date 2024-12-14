import Login from './components/Login';
import Todo from './components/Todo';
import { useContext, useState } from 'react';
import { UserContext } from './context/UserContext';

const App = () => {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <div>
      <h1>프론티어 TODO</h1>

      {isLoggedIn ? (
        <Login email="robin@google.com" />
      ) : (
        <Todo />
      )}
    </div>
  );
};

export default App;
