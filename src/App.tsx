import { Counter } from "./features/counter/Counter";
import { useFetchPeopleQuery } from "./features/faker-api/fakerApiSlice";
import "./app.css";

function App() {
  const { data = [], isFetching } = useFetchPeopleQuery();
  console.log(data);

  return (
    <div className="wrapper">
      <header>RTK Query practice</header>
      <section className="content">
        {data?.map((person) => {
          return (
            <div key={person?.data?.id}>
              {" "}
              <p>{person?.data.firstname}</p>
            </div>
          );
        })}

        {/* <Counter /> */}
      </section>
    </div>
  );
}

export default App;
