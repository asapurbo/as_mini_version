// dependecies
import apiSlice from '../api/apiSlice';
import { addVideo } from '../video/videoSlice';

// create injectEndpoints
export const getApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getData: builder.query({
            query: (url) => `/${url}`,
            onQueryStarted: async (arg, {dispatch, queryFulfilled}) => {
                const data = await queryFulfilled;
                if(arg === 'videos') {
                    dispatch(addVideo(data.data[0]))
                }
            },
        }),
    }),
});

// export module
export const { useGetDataQuery } = getApi;
