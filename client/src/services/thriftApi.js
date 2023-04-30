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
                
            }),
        }),
        // add to cart
        addToCart: builder.mutation({
            query: (cartInfo) => ({
                url: "/products/add-to-cart",
                body: cartInfo,
                method: "POST",
            }),
        }),
        // remove from cart
        removeFromCart: builder.mutation({
            query: (body) => ({
                url: "/products/remove-from-cart",
                body,
                method: "POST",
            }),
        }),
    }),
});

export const {useRegMutation} = thriftApi;
export const  {useLogMutation} = thriftApi;
export const  {usePostproductMutation} = thriftApi;

export const  {useAddToCartMutation} = thriftApi;
export const  { useRemoveFromCartMutation} = thriftApi;
export default thriftApi;