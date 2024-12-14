import Login from './components/Login';
import Todo from './components/Todo';
import { useSelector } from 'react-redux';

const App = () => {
  const { userInfo } = useSelector(
    (state) => state
  );
  const isLoggedIn = !userInfo;

  return (
    <div>
      <h1>프론티어 TODO</h1>

      {isLoggedIn ? (
        <Login email="robin@google.com">
          <h1>asdfsadfsadfasdfsdf</h1>
        </Login>
      ) : (
        <Todo />
      )}
    </div>
  );
};

export default App;
