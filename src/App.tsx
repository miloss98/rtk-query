import { useFetchPeopleQuery } from "./features/faker-api/fakerApiSlice";
import Counter from "./features/counter/Counter";
import "./app.css";

function App() {
  const { data, isLoading, error } = useFetchPeopleQuery(undefined);

  console.log(data);

  if (isLoading)
    return (
      <div>
        <p style={{ textAlign: "center" }}> Content is loading</p>
      </div>
    );
  if (error)
    return (
      <div>
        <p style={{ textAlign: "center" }}> Error! </p>
      </div>
    );
  return (
    <div className="wrapper">
      <header>RTK Query </header>
      <section className="content">
        {/* <section className="cards-container">
          {data?.data?.map((person) => {
            return (
              <article key={person?.id} className="single-card">
                <ul style={{ listStyle: "none" }}>
                  <li>
                    {person?.firstname} {person.lastname}
                  </li>
                  <li>Email: {person?.email}</li>
                  <li>Phone: {person?.phone}</li>
                  <li>Birthday: {person?.birthday}</li>
                  <li>
                    Address info: {person?.address?.street},
                    {person?.address?.city}, {person?.address?.country}
                  </li>
                  <li>Website: {person?.website}</li>
                </ul>
              </article>
            );
          })}
        </section> */}
        <Counter />
      </section>
    </div>
  );
}

export default App;
