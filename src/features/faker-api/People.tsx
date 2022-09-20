import { useFetchPeopleQuery } from "./fakerApiSlice";
import "../../app.css";

const People = () => {
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
    <section className="cards-container">
      {data?.data?.map((person) => {
        return (
          <article key={person?.id}>
            <ul style={{ listStyle: "none" }}>
              <li>
                {person?.firstname} {person.lastname}
              </li>
              <li>Email: {person?.email}</li>
              <li>Phone: {person?.phone}</li>
              <li>Birthday: {person?.birthday}</li>
              <li>
                Address info: {person?.address?.street},{person?.address?.city},{" "}
                {person?.address?.country}
              </li>
              <li>Website: {person?.website}</li>
            </ul>
          </article>
        );
      })}
    </section>
  );
};

export default People;
