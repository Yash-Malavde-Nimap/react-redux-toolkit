/* eslint-disable react/prop-types */
const TodoItem = ({ todo }) => {
  return (
    <>
      <>
        <div
          key={todo.id} // It's important to add a unique `key` for each mapped item
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: "20px",
            padding: "10px",
            border: "2px solid black",
            borderRadius: "10px",
            width: "350px", // Fixed width
            height: "40px", // Fixed height
            overflow: "hidden", // Optional: prevents content from overflowing
            wordWrap: "break-word", // Wraps text to the next line when it overflows
            whiteSpace: "normal",
          }}
          onClick={() => console.log(todo)}
        >
          <p>{todo.id}</p>
          <p>{todo.title}</p>
          {/* <p>{todo.completed}</p> */}
        </div>
      </>
    </>
  );
};

export default TodoItem;
