import { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(5);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    console.log('useEffect !!!');
    // setCount(999);
  }, []);

  useEffect(() => {
    console.log('change count - ', count);
  }, [count]);

  return (
    <div>
      카운트:
      {count}
      <div>
        <button onClick={increase}>카운트 증가</button>
        <button onClick={decrease}>카운트 감소</button>
      </div>
    </div>
  );
};

export default Counter;
