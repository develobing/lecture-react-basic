import React from 'react';
import Header from './layout/Header';

const Todo = () => {
  return (
    <div>
      <Header />

      <section className="container">
        <div className="todo-container">
          <h1>오늘 할 일</h1>

          <main>
            <div className="todo-input">
              <input
                type="text"
                className="new-task"
                placeholder="할 일을 입력하세요"
              />
              <button className="btn primary">
                추가하기
              </button>
            </div>

            <ul className="todo-list">
              <li>
                <span>React 공부하기</span>
                <div className="button-group">
                  <button className="btn success">
                    완료
                  </button>
                  <button className="btn delete">
                    삭제
                  </button>
                </div>
              </li>
            </ul>
          </main>
        </div>

        <div className="complete-container">
          <h2>완료한 일</h2>
          <ul className="complete-list">
            <li>
              <span className="strike">
                HTML 공부하기
              </span>
              <div className="button-group">
                <button className="btn warning">
                  취소
                </button>
              </div>
            </li>

            <li>
              <span className="strike">
                CSS 공부하기
              </span>
              <div className="button-group">
                <button className="btn warning">
                  취소
                </button>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Todo;
