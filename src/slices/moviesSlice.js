
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await fetch('https://dummyapi.online/api/movies');
  const data = await response.json();
  console.log(data); 
  return data; 
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    status: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default moviesSlice.reducer;
