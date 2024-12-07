import Login from './components/Login';
import Todo from './components/Todo';
import { useState } from 'react';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] =
    useState(false);

  const onSuccess = () => {
    // ...

    setIsLoggedIn(true);
  };

  return (
    <div>
      <h1>프론티어 TODO</h1>

      {!isLoggedIn ? (
        <Login
          email="robin@google.com"
          onSuccess={onSuccess}
        />
      ) : (
        <Todo />
      )}
    </div>
  );
};

export default App;
