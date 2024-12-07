import { useState } from 'react';

const USERS = [
  {
    id: 'robin',
    password: '5555',
  },
  {
    id: 'sally',
    password: '7777',
  },
];

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('handleLogin() ');

    // 필수값 확인
    if (
      id.trim() === '' ||
      password.trim() === ''
    )
      return alert('필수값을 입력해주세요');

    // ID에 맞는 사용자 확인
    const targetUser = USERS.find(
      (userInfo) => userInfo.id === id
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
  };

  return (
    <div>
      <p>테스트ID: {id}</p>
      <p>테스트PW: {password}</p>

      <label htmlFor="">아이디</label>
      <input
        type="text"
        maxLength={10}
        value={id}
        onChange={(event) =>
          setId(event.target.value)
        }
      />

      <label htmlFor="">비밀번호</label>
      <input
        type="password"
        maxLength={10}
        value={password}
        onChange={(event) =>
          setPassword(event.target.value)
        }
      />

      <button onClick={handleLogin}>
        로그인
      </button>
    </div>
  );
};

export default Login;
