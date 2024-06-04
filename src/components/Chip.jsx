/* eslint-disable react/prop-types */
export default function Chip({ selectedMovie, setSelectedMovie }) {
  function removeSelection() {
    setSelectedMovie((prev) => prev.filter((item) => item !== selectedMovie)); // same thing from boxes
  }
  return (
    <span
      style={{
        padding: "5px 15px",
        borderRadius: "20px",

        alignItems: "center",
        backgroundColor: " #148A08",
        color: "white",
      }}
    >
      {selectedMovie}&nbsp; &nbsp;{" "}
      <span
        style={{
          cursor: "pointer",
          color: "black",
          background: "transparent",
        }}
        onClick={removeSelection}
      >
        X
      </span>
    </span>
  );
}
