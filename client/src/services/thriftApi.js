import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const thriftApi = createApi({
    reducerPath: "thriftApi",
    //set the baseURL for every endpoint that is gonna come from now on
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
    endpoints: (builder) => ({
        reg: builder.mutation({
            query: (user) => ({
                url: "/users/Register",
                method: "POST",
                body: user,                       //model er function call kori routes e--> url 
            }),                                     
        }),

        log: builder.mutation({
            query: (user) => ({
                url: "/users/Log_In",
                method: "POST",
                body: user,
            }),
        }),
        postproduct: builder.mutation({
            query: (product) => ({
                url: "/products",
                method: "POST",
                body: product,
                
            })
        })
    }),
});

export const {useRegMutation} = thriftApi;
export const  {useLogMutation} = thriftApi;
export const  {usePostproductMutation} = thriftApi;

export default thriftApi;