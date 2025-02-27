import MovieInput from "./Components/MovieInput";
import MovieList from "./Components/MovieList";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center", 
        flexDirection: "column",
        gap:"40px",
        background: "#faebd7",
        minHeight: "100vh",
      }}
    >
      <MovieInput />
      <MovieList />
    </div>
  );
};

export default App;
