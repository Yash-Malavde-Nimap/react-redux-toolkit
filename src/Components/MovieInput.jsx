import { useState } from "react";
import { useDispatch } from "react-redux";
import { add_Movie } from "../store/movies/movieSlice.js";

const MovieInput = () => {
  const [movieInput, setMovieInput] = useState("");

  const dispatch = useDispatch();

  const handleAddMovie = () => {
    if (movieInput) {
      dispatch(add_Movie(movieInput));
      setMovieInput("");
    }
  };

  return (
    <div
      style={{
        // width: "20%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        // margin:'40px'
        // marginTop: "50px",
        paddingTop:"50px",
        paddingBottom:"50px"
      }}
    >
      <h2>Add Movie</h2>

      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <input
          type="text"
          value={movieInput}
          onChange={(e) => {
            setMovieInput(e.target.value);
          }}
          style={{
            width: "150px",
            padding: "10px",
            // margin: "20px",
          }}
          placeholder="Enter Movie to Add"
        />

        <button
          style={{
            width: "50px",
          }}
          onClick={() => {
            handleAddMovie();
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default MovieInput;
