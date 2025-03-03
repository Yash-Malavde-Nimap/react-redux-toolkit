/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import TodoItem from "./TodoItem.jsx";
import { fetchTodos } from "../../store/todos/todoSlice.js";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  console.log(todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        flexDirection: "column",
        gap: "40px",
        minHeight: "100vh",
      }}
    >
      <h2>Todos From Async Thunk</h2>

      {todos.loading ? (
        <>
          <p>Loading...</p>
        </>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "20px",
              maxWidth: "320px",
            }}
          >
            {todos.todos.slice(0, 5).map((todo) => (
              <TodoItem todo={todo} key={todo.id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Todos;
