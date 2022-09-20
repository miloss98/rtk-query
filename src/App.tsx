import People from "./features/faker-api/People";
import Counter from "./features/counter/Counter";
import "./app.css";

function App() {
  return (
    <div className="wrapper">
      <header>RTK Query </header>
      <section className="content">
        <People />
        <Counter />
      </section>
    </div>
  );
}

export default App;
