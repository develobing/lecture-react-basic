import {
  useDispatch,
  useSelector,
} from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(
    (state) => state.userInfo
  );

  return (
    <header className="header">
      <div className="header-left">
        <span className="header-logo">
          오늘 할 일
        </span>
      </div>

      <div className="header-right">
        {userInfo?.name}님 반갑습니다.
        <button
          className="btn primary"
          onClick={() =>
            dispatch({ type: 'LOGOUT' })
          }
        >
          로그아웃
        </button>
      </div>
    </header>
  );
};

export default Header;
