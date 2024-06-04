/* eslint-disable react/prop-types */
export default function Box({
  data,
  selectedMovie,
  setSelectedMovie,
  backgroundColor,
}) {
  function handleSelection() {
    if (selectedMovie.includes(data.category)) {
      // if this movie is already selected
      setSelectedMovie((prev) => prev.filter((item) => item !== data.category)); // then filter it out and remove from the selected movies array
    } else {
      // if this movie is not selected
      setSelectedMovie((prev) => [...prev, data.category]); // add it into the state
    }
  }
  return (
    <div
      id="bgcolors"
      style={{
        border: `5px solid ${
          selectedMovie.includes(data.category) ? "#11B800" : "black"
        }`,
        borderRadius: "15px",
        padding: "10px",
        margin: "10px",
        width: "120px",
        height: "120px",
        display: "inline-block",
        color: "white",
        background: backgroundColor,
        fontSize: "1.3rem",
      }}
      onClick={handleSelection}
    >
      {data.category}
      <img
        src={data.image}
        alt=""
        style={{
          width: "120px",
          border: "none",
          borderRadius: "10px",
          marginTop: "1rem",
        }}
      />
    </div>
  );
}
