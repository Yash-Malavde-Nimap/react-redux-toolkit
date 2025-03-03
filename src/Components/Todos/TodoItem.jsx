/* eslint-disable react/prop-types */
const TodoItem = ({ todo }) => {
  return (
    <>
      <>
        <div
          key={todo.id}
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: "20px",
            padding: "10px",
            border: "2px solid #b2b2b2",
            borderRadius: "10px",
            width: "450px", 
            height: "40px", 
            overflow: "hidden",
            wordWrap: "break-word",
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
