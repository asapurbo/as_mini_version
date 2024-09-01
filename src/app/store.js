// dependencies
import { configureStore } from '@reduxjs/toolkit';
import apiSlice from '../feature/api/apiSlice';
import userSlice from '../feature/users/userSlice';
import videoSlice from '../feature/video/videoSlice';
import videosSlice from '../feature/videos/videosSlice';
import utilsSlice from '../feature/utils/utilsSlice';

// create store
const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        userReducer: userSlice,
        video: videoSlice,
        videos: videosSlice,
        utils: utilsSlice
    },
    middleware: (defaultMiddleware) => {
        return defaultMiddleware().concat(apiSlice.middleware);
    },
});

export default store;
