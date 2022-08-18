import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const materialsAPI = createApi({
    reducerPath: "materials",
    baseQuery: fetchBaseQuery({ baseUrl: "https://62584f320c918296a49543e7.mockapi.io" }),
    tagTypes: ["Materials"],
    endpoints: (builder) => ({
        getMaterials: builder.query({
            query: () => `/materials`,
            providesTags: ["Materials"]
        }),
        addMaterial: builder.mutation({
            query: ({ title, link }) => ({
                url: "/materials",
                method: "POST",
                body: {
                    title,
                    link
                }
            }),
            invalidatesTags: ["Materials"]
        }),
        deleteMaterial: builder.mutation({
            query: (Id) => ({
                url: `/materials/${Id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Materials"]
        }),
        updateMaterial: builder.mutation({
            query: ({ id, title }) => ({
                url: `/materials/${id}`,
                method: "PUT",
                body: {
                    title
                }
            }),
            invalidatesTags: ["Materials"]
        })
    })
})

export const { useGetMaterialsQuery, useDeleteMaterialMutation, useAddMaterialMutation, useUpdateMaterialMutation } = materialsAPI;