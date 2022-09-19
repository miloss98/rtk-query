import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Person {
  data?: [
    {
      id: 1;
      firstname: string;
      lastname: string;
      email: string;
      phone: string;
      birthday: string;
      address: {
        street: string;
        city: string;
        country: string;
      };
      website: string;
    }
  ];
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakerapi.it/api/v1",
  }),
  endpoints(builder) {
    return {
      fetchPeople: builder.query<Person, undefined>({
        query() {
          return "/persons";
        },
      }),
    };
  },
});

export const { useFetchPeopleQuery } = apiSlice;
