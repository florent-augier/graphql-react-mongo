import "./App.css";
import Articles from "./components/Articles";
import useWindowSize from "./components/WindowSize";

function Button() {
  const [width, height] = useWindowSize();

  return (
    <button
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        border: "2px solid #b43b5c",
        backgroundColor: "#b4943b",
        position: "sticky",
        top: `${height / 2}px`,
        opacity: "0.7",
      }}
      onClick={() => window.scrollTo(0, 0)}
    >
      Top
    </button>
  );
}

function App() {
  return (
    <div className="App">
      <Button />
      <Articles />
    </div>
  );
}

export default App;
