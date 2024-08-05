import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosList } from '../../utils/axiosRequest/axiosRequest'

// Fetch data from API

export const fetchHomeData = createAsyncThunk(
  'home/fetchHomeData',
  async () => {
    try {
      const { data } = await axiosList.get('/Product/get-products');
      return data.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const getProfilByid = createAsyncThunk(
  'home/getProfilByid',
  async (id) => {
    try {
      const { data } = await axiosList.get(`/UserProfile/get-user-profile-by-id?id=${id}`);
      console.log(data?.data);
      
      return data?.data;
    } catch (error) {
      console.error(error);
    }
  }
);

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    data: [],
    profileData: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHomeData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.products; // Update to match the API structure
      })
      .addCase(getProfilByid.fulfilled, (state, action) => {
        state.loading = false;
        state.profileData = action.payload; // Update to match the API structure
      })
      .addCase(fetchHomeData.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default homeSlice.reducer;
