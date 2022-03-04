import "./App.css";
import Body from "./app/Body";
import Navigation from "./app/Navigation";

function App() {
  document.body.style.zoom = "0%";
  let zoom = ((window.outerWidth - 10) / window.innerWidth) * 100;

  console.log(zoom);
  return (
    <section className="app">
      <Navigation />
      <Body />
    </section>
  );
}

export default App;
