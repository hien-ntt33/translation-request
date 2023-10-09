import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { LOCAL_URL } from '../../constants';

export const fetchRequest = createAsyncThunk(
    'request/fetchRequest',
    async (thunkAPI) => {
        const response = await axios.get(LOCAL_URL + '/');
        return response.data;
    },
);

export const fetchUser = createAsyncThunk(
    'request/fetchUser',
    async (thunkAPI) => {
        const response = await axios.get(LOCAL_URL + '/register');
        return response.data;
    },
);