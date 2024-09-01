// dependencies
import { createSlice } from '@reduxjs/toolkit'

// initial state
const initialState = {
    video: {}
}

// videos slice function
const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
        addVideo: (state, action) => {
            state.video = action.payload
        }
    }
})


// exprot module
export const { addVideo } = videoSlice.actions;
export default videoSlice.reducer;
