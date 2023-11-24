import { apiRoute, rtkBaseURL, apiMethods } from 'src/configs/apiConfig'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['UserTag'],
  baseQuery: fetchBaseQuery({
    baseUrl: rtkBaseURL
  }),

  endpoints: builder => ({
    userGetAll: builder.query({
      query: () => ({
        url: apiRoute.TEST_USER_ENDPOINT.getAll,
        method: apiMethods.GET
      }),

      providesTags: [{ type: 'UserTag', id: 'LIST' }]
    })
  })
})

export const { useUserGetAllQuery } = api

// export const usersApi = api.enhanceEndpoints({
//   addTagTypes: ['User'],
//   endpoints: {
//     user_GetAll: {
//       query: () => ({
//         procedurePath: apiRoute.TEST_USER_ENDPOINT.getAll,
//         procedureType: 'query',
//         procedureArguments: null
//       })
//     }
//   }
// })

// getAllUsers: builder.query({
//   query: () => ({
//     procedurePath: apiRoute.TEST_USER_ENDPOINT.getAll,
//     procedureType: 'query',
//     procedureArguments: null
//   })
// })
