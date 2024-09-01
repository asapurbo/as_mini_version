import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
    item: {},
    quizinfo: []
};

// create slice
const utilsSlice = createSlice({
    name: 'utilsSlice',
    initialState,
    reducers: {
        onQuiz: (state, action) => {
            const itemIdFindOut1 = Object.keys(state.item);
            const itemIdFindOut2 = itemIdFindOut1.indexOf(
                action.payload.itemID
            );

            const obState = JSON.parse(JSON.stringify(state.item));

            const itemIdFindOut3 = Object.values(obState);

            if (itemIdFindOut3?.length > 0) {
                if (
                    itemIdFindOut3[itemIdFindOut3.length - 1].videoId !==
                    +action.payload?.videoId
                ) {
                    state.item = {};
                }
            }

            if (itemIdFindOut1.length >= 0 && itemIdFindOut2 === -1) {
                state.item[action.payload.itemID] = {
                    isTrue: [action.payload.data],
                    id: action.payload.id,
                    videoId: +action.payload?.videoId,
                };
            } else if (itemIdFindOut1.length > 0) {
                if (itemIdFindOut2 > -1) {
                    const findquiz = state.item[
                        action.payload.itemID
                    ].isTrue.findIndex((i) => i.id === action.payload.data.id);

                    if (findquiz > -1) {
                        state.item[action.payload.itemID].isTrue = state.item[
                            action.payload.itemID
                        ].isTrue.filter((i) => i.id !== action.payload.data.id);
                    } else {
                        state.item[action.payload.itemID].isTrue.push(
                            action.payload.data
                        );
                    }
                }
            }
        },
        handleQuizInfo: (state, action) => {
            state.quizinfo = action.payload;
        }
    },
});

// export module
export const { onQuiz, handleQuizInfo } = utilsSlice.actions;

export default utilsSlice.reducer;
