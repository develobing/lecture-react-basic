import {
  useDispatch,
  useSelector,
} from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector(
    (state) => state
  );

  return (
    <header class="header">
      <div class="header-left">
        <span class="header-logo">
          오늘 할 일
        </span>
      </div>

      <div class="header-right">
        {userInfo?.name}님 반갑습니다.
        <button
          class="btn primary"
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
