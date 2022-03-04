import "./App.css";
import Body from "./app/Body";
import Navigation from "./app/Navigation";

function App() {
  document.body.style.zoom = "80%";
  return (
    <section className="app">
      <Navigation />
      <Body />
    </section>
  );
}

export default App;
