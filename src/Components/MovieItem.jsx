/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editMovie2, remove_Movie } from "../store/movies/movieSlice";

const MovieItem = ({ mov }) => {
  const dispatch = useDispatch();

  const [editMovie, setEditMovie] = useState(mov.title);
  const [edit, setEdit] = useState(false);

  const handleDeleteMovie = (id) => {
    if (id) {
      dispatch(remove_Movie(id));
    }
    setEdit(false);
  };

  const handleEditMovie = (id) => {
    if (editMovie) {
      const movie = { id: id, title: editMovie };
      dispatch(editMovie2(movie));
    }
    setEdit(false);
  };

  const toggleEdit = () => {
    setEdit((prev) => !prev);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        gap: "20px",
        padding: "10px",
        border: "2px solid black",
        borderRadius: "10px",
        maxWidth:"400px",
        height: "60px", // Fixed height
        overflow: "hidden", // Optional: prevents content from overflowing
        wordWrap: "break-word", // Wraps text to the next line when it overflows
        whiteSpace: "normal",
        margin:'4px'
      }}
    >
      {edit ? (
        <>
          <input
            type="text"
            value={editMovie}
            onChange={(e) => setEditMovie(e.target.value)}
            style={{
              padding: "8px",
              background: "#fff",
              color: "black",
              border: "2px solid black",
            }}
          />
          <button
            style={{
              padding: "8px",
              background: "green",
              color: "white",
            }}
            onClick={() => handleEditMovie(mov.id)}
          >
            Done
          </button>
        </>
      ) : (
        <p>{mov.title}</p>
      )}

      <button
        style={{
          padding: "8px",
          background: "blue",
          color: "white",
          outline: "none",
        }}
        onClick={() => toggleEdit()}
      >
        {!edit ? "Edit" : "X"}
      </button>
      <button
        style={{
          padding: "8px",
          background: "red",
          color: "white",
          outline: "none",
        }}
        onClick={() => handleDeleteMovie(mov.id)}
      >
        X
      </button>
    </div>
  );
};

export default MovieItem;
