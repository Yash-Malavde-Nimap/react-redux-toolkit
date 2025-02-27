import { useDispatch, useSelector } from "react-redux";
import { remove_Movie } from "../redux/movies/movieSlice";

const MovieList = () => {
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();

  console.log(movies);
  const handleDeleteMovie = (id) => {
    console.log(id);
    if (id) {
      dispatch(remove_Movie(id));
    }
  };
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
      <p></p>

      {movies.length > 0 ? (
        movies.map((mov, i) => (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "20px",
                margin: "10px",
                padding: "10px 15px",
                border: "2px solid black",
                borderRadius: "20px",
              }}
            >
              <p key={i}>{mov.title}</p>
              <button
                style={{
                  padding: "1px 4px",
                  background: "red",
                  color: "white",
                  outline: "none",
                }}
                onClick={() => handleDeleteMovie(mov.id)}
              >
                X
              </button>
            </div>
          </>
        ))
      ) : (
        <>
          <div style={{
            marginTop:'20px'
          }}>
            <p>---Please Add Movies---</p>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieList;
