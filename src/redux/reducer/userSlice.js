import { createSlice } from '@reduxjs/toolkit';
import { fetchUser } from '../api/user';

const userSlice = createSlice({
    name: 'users',
    initialState: [{
        id: 1,
        username: 'HienNTT',
        email: 'hienntt@rikkeisoft.com',
        projectName: 'Peraichi',
        password: 'Maki@123',
        confirmPswd: 'Maki@123'
    },
    {
        id: 2,
        username: 'HienNTT2',
        email: 'hienntt2@rikkeisoft.com',
        projectName: 'Portal',
        password: 'Maki@123',
        confirmPswd: 'Maki@123'
    }],
    reducers: {
        addUser(state, action) {
            console.log('adding user');
            state.push(action.payload);
        },
        removeUser(state, action) {
            console.log('remove user');
            state.splice(action.payload, 1);
            console.log(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.push(action.payload);
        });
    },
});

const { actions, reducer } = userSlice;
export const { addUser, removeUser, updateUser } = actions;
export default reducer;
