import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const Header = () => {
  const { userInfo, setUserInfo } =
    useContext(UserContext);

  return (
    <header class="header">
      <div class="header-left">
        <span class="header-logo">
          오늘 할 일
        </span>
      </div>

      <div class="header-right">
        {userInfo.name}님 반갑습니다.
        <button
          class="btn primary"
          onClick={() => setUserInfo(null)}
        >
          로그아웃
        </button>
      </div>
    </header>
  );
};

export default Header;
