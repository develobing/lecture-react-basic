import { useState } from 'react';

const USERS = [
  {
    email: 'robin@google.com',
    password: '5555',
  },
  {
    email: 'sally@google.com',
    password: '7777',
  },
];

const Login = ({
  email: initialEmail,
  onSuccess,
}) => {
  const [email, setEmail] =
    useState(initialEmail);
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('handleLogin() ');

    // 필수값 확인
    if (
      email.trim() === '' ||
      password.trim() === ''
    )
      return alert('필수값을 입력해주세요');

    // 이메일에 맞는 사용자 확인
    const targetUser = USERS.find(
      (userInfo) => userInfo.email === email
    );
    console.log('targetUser', targetUser);

    // 사용자가 없으면 리턴
    if (!targetUser)
      return alert('유저가 없습니다.');

    // 비밀번호 확인
    const isValidPassword =
      targetUser.password === password;
    if (!isValidPassword)
      return alert('비밀번호가 틀립니다.');

    alert('로그인에 성공하였습니다!');
    onSuccess?.();
  };

  return (
    <div className="login-container">
      <div
        className="login-form"
        action="todo.html"
        method="GET"
      >
        <h1>로그인</h1>
        <div className="input-group">
          <label htmlFor="email">이메일</label>
          <input
            type="text"
            id="email"
            name="email"
            maxLength="20"
            required=""
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">
            비밀번호
          </label>
          <input
            type="password"
            id="password"
            name="password"
            maxLength="20"
            required=""
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
          />
        </div>
        <div className="button-group">
          <button
            type="button"
            className="btn primary"
            onClick={handleLogin}
          >
            로그인
          </button>
          <button
            type="button"
            className="btn success"
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
