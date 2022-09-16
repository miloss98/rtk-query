import { Counter } from "./features/counter/Counter";
import "./app.css";

function App() {
  return (
    <div className="wrapper">
      <header>RTK Query practice</header>
      <section className="content">
        <Counter />
      </section>
    </div>
  );
}

export default App;
