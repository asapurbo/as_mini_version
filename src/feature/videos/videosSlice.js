// dependencies
import { createSlice } from '@reduxjs/toolkit'

// initial state
const initialState = {
    videdos: []
}

// videos slice function
const videosSlice = createSlice({
    name: 'videos',
    initialState,
    reducers: {
        addVideos: (state, action) => {
            state.videdos = action.payload
        }
    }
})


// exprot module
export const { addVideos } = videosSlice.actions;
export default videosSlice.reducer;
