import MovieInput from "./Components/MovieInput";
import MovieList from "./Components/MovieList";
import Todos from "./Components/Todos/Todos.jsx";

const App = () => {
  return (
    <>
      <div
        style={{
          background: "#140d18",
          color:'white'
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
