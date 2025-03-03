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
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        padding: "10px",
        border: "2px solid #b2b2b2",
        borderRadius: "10px",
        width: "450px",
        height: "auto",
        overflow: "hidden",
        wordWrap: "break-word",
        whiteSpace: "normal",
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
        <p
          style={{
            maxWidth: "200px",
            margin: "4px",
          }}
        >
          {mov.title}
        </p>
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
