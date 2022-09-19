import { useFetchPeopleQuery } from "./features/faker-api/fakerApiSlice";
import "./app.css";
import { Person } from "./features/faker-api/fakerApiSlice";

function App() {
  const { data, isLoading, error } = useFetchPeopleQuery(undefined);

  console.log(data);

  if (isLoading)
    return (
      <div>
        <p> Content is loading</p>
      </div>
    );
  if (error)
    return (
      <div>
        <p> Error! </p>
      </div>
    );
  return (
    <div className="wrapper">
      <header>RTK Query practice</header>
      <section className="content">
        {data?.data?.map((person) => {
          return (
            <div key={person?.id}>
              <p>{person?.firstname}</p>
            </div>
          );
        })}

        {/* <Counter /> */}
      </section>
    </div>
  );
}

export default App;
