// dependecies
import apiSlice from '../api/apiSlice';
import { userInfo } from '../users/userSlice';

// create injectEndpoints
export const postApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postData: builder.mutation({
            query: ({url, data}) => ({
                url: `/${url}`,
                method: "POST",
                body: data,
            }),
            onQueryStarted: async (arg, {queryFulfilled, dispatch}) => {
                const data = (await queryFulfilled).data;
                if(arg?.url === 'login' || arg?.url === 'users') {
                    if(data) {
                        localStorage.setItem('auth', JSON.stringify(data))
                        dispatch(userInfo(data))
                    }
                }

                // assignmentMark post
                if(arg?.url === 'assignmentMark') {
                    dispatch(apiSlice.util.updateQueryData('getData', arg.url, (draft) => {
                        draft.push(data)
                    }))
                }

                // quiz mark post
                if(arg?.url === 'quizMark') {
                    dispatch(apiSlice.util.updateQueryData('getData', arg.url, (draft) => {
                        draft.push(data)
                    }))
                }
            }
        }),
    }),
});

// export module
export const { usePostDataMutation } = postApi;
