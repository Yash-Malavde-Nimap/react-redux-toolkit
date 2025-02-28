import { useSelector } from "react-redux";

import MovieItem from "./MovieItem";

const MovieList = () => {
  const movies = useSelector((state) => state.movies.movies);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>MovieList</h2>

      {movies.length > 0 ? (
        movies.map((mov, i) => (
          <>
            <MovieItem mov={mov} key={i} />
          </>
        ))
      ) : (
        <>
          <div
            style={{
              marginTop: "20px",
            }}
          >
            <p>---Please Add Movies---</p>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieList;
