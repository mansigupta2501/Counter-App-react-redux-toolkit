import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchImages = createAsyncThunk(
  'images/fetchImages',
  async () => {
    const response = await axios.get('https://api.unsplash.com/photos', {
      headers: {
        Authorization: 'Client-ID ClhSBszg6lJgKIMD09FE7JJ_OyQuwoIl73xNmdkvRPU',
      },
    });
    return response.data;
  }
);

export const fetchImagesFromApi1 = createAsyncThunk('images/fetchImagesFromApi1', async () => {
    const response = await fetch('https://api.example.com/api1/images');
    const data = await response.json();
    return data;
  });


const imagesSlice = createSlice({
    name: 'images',
    initialState: {
      images: [],
      status: 'idle',
      error: null,
    },
    reducers: {},
    extraReducers: {
      [fetchImages.pending]: (state) => {
        state.status = 'loading';
      },
      [fetchImages.fulfilled]: (state, action) => {
        state.status = 'succeeded';
        state.images = action.payload;
      },
      [fetchImages.rejected]: (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      },
    },
  });

  export const imageActions = imagesSlice.actions;

export default imagesSlice;
