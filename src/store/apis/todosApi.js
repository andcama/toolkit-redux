import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import React from "react";

export const todosApi = createApi({
  reducerPath: "todos",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos",
    }),
    getTodobyId: builder.query({
      query: (todoId) => `/todos/${todoId}`,
    }),
  }),
});

export const {useGetTodosQuery,useGetTodobyIdQuery} = todosApi;
