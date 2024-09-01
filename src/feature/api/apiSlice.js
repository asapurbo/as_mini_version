// dependencies
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logOut } from '../users/userSlice';

// create api
const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: async (args, api, extraOption) => {
        const result = fetchBaseQuery({
            baseUrl: 'http://localhost:9000/',
            prepareHeaders: (headers, { getState }) => {
                const token = getState().userReducer.accessToken;
                if (token) {
                    headers.set('Authorization', `Bearer ${token}`);
                }
                return headers;
            },
        })(args, api, extraOption);

        const resultData = await result

        if(resultData?.error?.status === 404) {
            api.dispatch(logOut())
            localStorage.clear()
        }

        return result;
    },
    endpoints: () => ({}),
});

// export module
export default apiSlice;
