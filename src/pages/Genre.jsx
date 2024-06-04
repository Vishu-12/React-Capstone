const MOVIES = [
  {
    id: 0,
    category: "Action",
    bgcolor: "#FF5209",
    image: "../assets/action.png",
  },
  {
    id: 1,
    category: "Drama",
    bgcolor: "#D7A4FF",
    image: "../assets/drama.png",
  },
  {
    id: 2,
    category: "Romance",
    bgcolor: "#11B800",
    image: "../assets/romance.png",
  },
  {
    id: 3,
    category: "Thriller",
    bgcolor: "#84C2FF",
    image: "../assets/thriller.png",
  },
  {
    id: 4,
    category: "Western",
    bgcolor: "#902500",
    image: "../assets/western.png",
  },
  {
    id: 5,
    category: "Horror",
    bgcolor: "#7358FF",
    image: "../assets/horror.png",
  },
  {
    category: "Fantasy",
    bgcolor: "#FF4ADE",
    image: "../assets/fantasy.png",
    id: 6,
  },
  {
    category: "Music",
    bgcolor: "#E61E32",
    image: "../assets/music.png",
    id: 7,
  },
  {
    category: "Fiction",
    bgcolor: "#6CD061",
    image: "../assets/fiction.png",
    id: 8,
  },
];
import { useState } from "react";
import Box from "../components/Box";
import Chip from "../components/Chip";
import { useNavigate } from "react-router-dom";
import { FiAlertTriangle } from "react-icons/fi";
export default function Genre() {
  const [selectedMovie, setSelectedMovie] = useState([]);
  const navigate = useNavigate();
  function handleNavigate() {
    if (selectedMovie.length < 3) return;
    localStorage.setItem("selectedMovie", JSON.stringify(selectedMovie));
    navigate("/info");
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "40vw", marginTop: "5rem" }}>
        <p className="super-app">Super app</p>
        <p
          style={{
            fontSize: "3rem",
            fontWeight: "700",
            width: "30vw",
            margin: "2rem 0",
            color: "white",
          }}
        >
          Choose your entertainment category
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            margin: "1rem 0",
            width: "30vw",
          }}
        >
          {selectedMovie.length > 0
            ? selectedMovie.map((movie, index) => {
                return (
                  <Chip
                    selectedMovie={movie}
                    setSelectedMovie={setSelectedMovie}
                    key={index}
                  />
                );
              })
            : null}
        </div>
        <p
          style={{
            color: "red",
            display: "flex",
            alignItems: "center",
            gap: ".5rem",
          }}
        >
          {selectedMovie.length < 3 ? <FiAlertTriangle /> : null}
          {selectedMovie.length < 3 ? "Minimum 3 movies are required" : null}
        </p>
      </div>
      <div style={{ marginTop: "4rem", width: "35vw" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          {MOVIES.map((movie) => {
            return (
              <Box
                selectedMovie={selectedMovie}
                setSelectedMovie={setSelectedMovie}
                key={movie.id}
                data={movie}
                backgroundColor={movie.bgcolor}
                movieImage={movie.image}
              />
            );
          })}
        </div>
      </div>
      <button
        style={{
          marginTop: "20px",
          padding: "10px 30px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "20px",
          position: "fixed",
          bottom: "40px",
          right: "7rem",
          letterSpacing: ".2rem",
        }}
        onClick={handleNavigate}
      >
        Next Page
      </button>
    </div>
  );
}
