import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Person {
  data: {
    id: 1;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    birthday: string;
    gender: string;
    address: {
      street: string;
      city: string;
      country: "Palau";
    };
    website: string;
    image: string;
  };
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakerapi.it/api/v1",
    prepareHeaders(headers) {
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchPeople: builder.query<Person[], number | void>({
        query() {
          return "/persons";
        },
      }),
    };
  },
});

export const { useFetchPeopleQuery } = apiSlice;
