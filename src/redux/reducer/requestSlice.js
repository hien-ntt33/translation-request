import { createSlice } from '@reduxjs/toolkit';
import { fetchRequest } from '../api/request';

const requestSlice = createSlice({
    name: 'requests',
    initialState: [{
        id: 1,
        title: 'Peraichi request',
        status: 'New',
        priority: 'Normal',
        confidential: '',
        requestedDate: '2023/10/01',
        deadline: '2023/10/01',
        note: 'None',
        content: 'Test',
    }],
    reducers: {
        addRequest(state, action) {
            console.log('adding request');
            state.push(action.payload);
        },
        removeRequest(state, action) {
            console.log('remove request');
            state.splice(action.payload, 1);
            console.log(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRequest.fulfilled, (state, action) => {
            state.push(action.payload);
        });
    },
});

const { actions, reducer } = requestSlice;
export const { addRequest, removeRequest } = actions;
export default reducer;
