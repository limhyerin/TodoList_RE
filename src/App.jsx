import React, { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import Header from "./components/Header";
import InputArea from "./components/InputArea";
import TodoList from "./components/TodoList";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const bodyChangeHandler = (event) => {
    setBody(event.target.value);
  };

  // TODO LIST 작성하고 추가 버튼 클릭시 내용 추가
  const clickAddHandler = (event) => {
    if (title && body) {
      const newTodo = {
        id: todo.length + 1,
        title: title,
        body: body,
      };
      setTodo([...todo, newTodo]);
      setTitle("");
      setBody("");
    } else {
      alert("입력이 없습니다");
    }
  };

  // 삭제 버튼 클릭(x)
  const clickDelHandler = (id) => {
    const newTodo = todo.filter((todo) => todo.id !== id);
    setTodo(newTodo);
  };

  // 완료시 Done으로 이동, isDone true
  const clickDoneHandler = (id) => {
    const newTodo = todo.map(function (todo) {
      if (todo.id === id) {
        return { ...todo, isDone: true };
      }
      return todo;
    });
    setTodo(newTodo);
  };

  // 취소버튼 클릭시 다시 Working으로 옮겨지도록 isDone false값 주기
  const clickCancelHandler = (id) => {
    const newTodo = todo.map(function (todo) {
      if (todo.id === id) {
        return { ...todo, isDone: false };
      }
      return todo;
    });
    setTodo(newTodo);
  };

  return (
    <div className="container">
      <Header/>
      <hr />
      <InputArea
        valueTitle = {title}
        onChangeTitle={titleChangeHandler}
        valueBody = {body}
        onChangeBody = {bodyChangeHandler}
        clickAddHandler={clickAddHandler}
      />
      <TodoList className={"working"} title={"Working...🔥"} />

      <div className="app-style">
        {todo
          .filter((item) => !item.isDone)
          .map((item) => (
            // key ={item.id} 에서 id값을 주는 이유는 각 id를 추적하기 위해서
            <Todo
              key={item.id}
              item={item}
              clickHandler1={clickDelHandler}
              clickHandler2={clickDoneHandler}
              btn1={"삭제하기"}
              btn2={"완료"}
            />
          ))}
      </div>

      <TodoList className={"done"} title={"Done✔️"} />

      <div className="app-style">
        {todo
          .filter((item) => item.isDone)
          .map((item) => (
            <Todo
              key={item.id}
              item={item}
              clickHandler1={clickDelHandler}
              clickHandler2={clickCancelHandler}
              btn1={"삭제하기"}
              btn2={"취소"}
            />
          ))}
      </div>
    </div>
  );
};

export default App;
