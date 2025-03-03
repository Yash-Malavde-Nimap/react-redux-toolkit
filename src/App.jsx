import MovieInput from "./Components/MovieInput";
import MovieList from "./Components/MovieList";
import Todos from "./Components/Todos/Todos.jsx";

const App = () => {
  return (
    <>
      <div
        style={{
          background: "#faebd7",
        }}
      >
        <MovieInput />
        <MovieList />
        <Todos />
      </div>
    </>
  );
};

export default App;
